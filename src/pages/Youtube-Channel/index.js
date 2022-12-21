import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import YoutubePage from "@site/src/components/YoutubePage";
import Header from "@site/src/components/Header";

const Page = () => {
  return (
    <Layout>
      <Header
        title={"LUKE'S YOUTUBE LESSONS"}
        body={
          "Check out my free Youtube lessons followed by over 41,500 subscribers around the world."
        }
        extra={
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.buttons
            )}
            href="https://www.youtube.com/playlist?list=PLKOUVoZGWfShsiJcd03cmabtzBt_2MwXd"
          >
            Subscribe
          </Link>
        }
      />
      <main>
        <YoutubePage />
      </main>
    </Layout>
  );
};

export default Page;
