import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";

import styles from "./index.module.css";

function HomepageHeader() {
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
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
