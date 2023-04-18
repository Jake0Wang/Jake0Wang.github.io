import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import AdminPage from "../../components/AdminPage";

const Page = () => {
  return (
    <Layout>
      <Header
        title={"Manage Youtube Videos"}
        body={"Fill out this form to add more Youtube videos to the site"}
      />
      <main>
        <AdminPage />
      </main>
    </Layout>
  );
};

export default Page;
