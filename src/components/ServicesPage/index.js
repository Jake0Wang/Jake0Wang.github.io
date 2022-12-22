import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import YoutubeEmbed from "../Youtube";
import book1 from "../../../static/img/book1.webp";
import book2 from "../../../static/img/book2.webp";
import Link from "@docusaurus/Link";

const Card = ({ img, title, time, description }) => {
  return (
    <div class={clsx("card text--center", styles.card)}>
      <div class="card__image">
        <img
          src={img}
          alt="Image alt text"
          title="Logo Title Text 1"
          style={{ width: "450px" }}
        />
      </div>
      <div class="card__body">
        <h2>{title}</h2>
        <p>
          <Link to="" style={{ textDecoration: "underline" }}>
            Read More
          </Link>
        </p>
        <p>{time}</p>
        <p>{description}</p>
      </div>
      <div class="card__footer">
        <Link
          className={clsx(
            "button button--secondary button--lg",
            styles.buttons
          )}
          to=""
        >
          Request to Book
        </Link>
      </div>
    </div>
  );
};

const BookSection = () => {
  return (
    <div
      className="margin-bottom--lg"
      style={{ display: "flex", justifyContent: "center", gap: 50 }}
    >
      <Card
        img={book1}
        title={"TRIAL ONLINE LESSION"}
        time={"1 hr"}
        description={"Call to get a quote!"}
      />
      <Card
        img={book2}
        title={"TRANSLATION AND CONSULTING"}
        time={"1 hr"}
        description={"fees vary"}
      />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <section className={styles.layout}>
      <div className="container">
        <div
          className={clsx(
            "row margin-bottom--lg text--center",
            styles.servicesLayout
          )}
        >
          <h2>Sample Online Lesson</h2>
          <YoutubeEmbed embedId={"t89pKX-VX1k"} width={853} height={480} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.underline} style={{ width: "60%" }}></div>
      </div>
      <BookSection />
    </section>
  );
};

export default ServicesPage;
