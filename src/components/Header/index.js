import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const Header = ({ title, body, extra }) => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}>{title}</h1>
        <div
          className="padding-bottom--lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {" "}
          <div className={styles.underline}></div>
        </div>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{body}</p>
        {extra}
      </div>
    </header>
  );
};

export default Header;
