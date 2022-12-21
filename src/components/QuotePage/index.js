import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { ImQuotesLeft } from "react-icons/im";

const Quote = ({ sentence, name, location }) => {
  return (
    <>
      <div className={clsx("col col--1")}>
        <ImQuotesLeft color="#6EA4CA" size={56} />
      </div>
      <div className={clsx("col col--11", styles.quote)}>
        <div className={clsx("padding-vert--md")}>
          <p>{sentence}</p>
          <div>
            {" "}
            <span className={styles.name}>
              {name}
              <br />
            </span>
            <span className={styles.location}>{location}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const StudentsPage = ({ QuoteList }) => {
  return (
    <section className={styles.layout}>
      <div className="container margin-bottom--xl">
        <div className="row margin-bottom--lg margin-horiz--xl">
          {QuoteList.map((props, idx) => (
            <Quote key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsPage;
