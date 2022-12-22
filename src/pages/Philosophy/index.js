import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import PhilosophyPage from "../../components/PhilosophyPage";

const Page = () => {
  return (
    <Layout>
      <Header title={"TEACHING PHILOSOPHY"} />
      <main>
        <PhilosophyPage />
      </main>
    </Layout>
  );
};

export default Page;
