import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import ServicesPage from "@site/src/components/ServicesPage";

const Page = () => {
  return (
    <Layout>
      <Header
        title={"Services"}
        extra={
          <p>
            As a full-time tutor, I customize all my lessons specifically to my
            students' learning objectives, learning styles, and time available.
            I love working with students of all ages for various goals. Because
            I teach all week, I am flexible with working around my students'
            schedules and locations.
            <br />
            <br />
            Reach out today for a discounted one-hour trial lesson, so we can
            discuss your specific needs and your schedule. After the trial
            lesson, my program starts at a package of 10 one-hour lessons.
            <br />
            <br />
            Due to the COVID-19 pandemic in 2020, I am currently conducting all
            teaching online via Google Meet.
          </p>
        }
      />
      <main>
        <ServicesPage />
      </main>
    </Layout>
  );
};

export default Page;
