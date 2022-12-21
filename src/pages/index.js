import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";

import styles from "./index.module.css";

const HomepageHeader = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          BEST CHINESE LESSONS
        </h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          FOR <span className={styles.emphasis}>PERSONALIZED</span> AND{" "}
          <span className={styles.emphasis}>EFFECTIVE</span> LEARNING
        </p>
      </div>
    </header>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
};

export default Home;
