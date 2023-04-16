// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "http";
import { createClient } from "supabase";

serve(async (req: Request) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {}
    );

    // deno-lint-ignore no-explicit-any
    let resData: any[] | null = [];
    switch (req.method) {
      case "OPTIONS":
        break;
      case "POST": {
        const data = await req.json();

        await supabaseClient.from("youtube_videos").insert(data).throwOnError();
        break;
      }
      case "GET": {
        const { data } = await supabaseClient
          .from("youtube_videos")
          .select()
          .order("created_at", { ascending: false })
          .throwOnError();

        resData = data;
        break;
      }
      default:
        break;
    }

    return new Response(JSON.stringify(resData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
