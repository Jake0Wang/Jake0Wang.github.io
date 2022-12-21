import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import Testimonialspage from "../../components/TestimonialsPage";

const Page = () => {
  return (
    <Layout>
      <Header
        title={"TESTIMONIALS"}
        body={
          "I love working with students of all ages for various goals. Following are some comments from my clients. Even though learning another language can be challenging, the rewards are immeasurable for all ages."
        }
      />
      <main>
        <Testimonialspage />
      </main>
    </Layout>
  );
};

export default Page;
