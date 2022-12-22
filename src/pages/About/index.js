import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import AboutPage from "../../components/AboutPage";

const Page = () => {
  return (
    <Layout>
      <Header
        title={"ABOUT"}
        body={
          "You can benefit from my 9 years of experience in consulting, teaching, translation, and tutoring for students of all ages. I am committed to continued learning and development for both myself and others."
        }
      />
      <main>
        <AboutPage />
      </main>
    </Layout>
  );
};

export default Page;
