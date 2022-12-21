import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import YoutubeEmbed from "../Youtube";
import GoogleMapEmbed from "../GoogleMap";

const FeatureList = [
  {
    title: "STUDENTS",
    description: (
      <>
        Learning a language is not about filling in the blanks and rote
        memorization of grammar rules. By understanding how our brains work, let
        me help you find the best way to boost your confidence in speaking
        again!
      </>
    ),
  },
  {
    title: "PROFESSIONALS",
    description: (
      <>
        Preparing for an international career, your Chinese language skills can
        be a great competitive edge! Tailored to your demanding schedule and
        specific learning needs, this program will help you speak from Day 1!
      </>
    ),
  },
  {
    title: "TEST PREPAPATION",
    description: (
      <>
        AP Chinese, HSK, MTLE, Foreign ServiceProficiency Test, ... Chinese
        level certification can be very valuable, but where do you start? Let's
        design a customized study plan and preparation strategy to get you
        ready!
      </>
    ),
  },
];

const Feature = ({ title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div
        className={clsx(
          "text--center padding-horiz--md margin--md padding--lg",
          styles.features
        )}
      >
        <h3 style={{ fontSize: 24 }}>{title}</h3>
        <p>{description}</p>
        <Link
          className={clsx(
            "button button--secondary button--lg",
            styles.buttons
          )}
          to="/docs/intro"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className={clsx("text--center padding-horiz--md")}>
      <h3 style={{ fontSize: 24 }}>​​TESTIMONIALS</h3>
      <p
        className={clsx("padding--lg margin-bottom--none", styles.testimonials)}
      >
        "Luke is a great teacher and his lessons are fun. I had never spoken a
        word of Chinese when I started taking his tutor lessons. The way he
        explains grammar and the different tonations is very clear and makes
        learning Chinese much easier and also a lot of fun. He had me learn
        different dialogues which I was able to use in basic conversations. I
        highly recommend checking him out and maybe try one of his trial lessons
        to see if it is a good fit for you."
      </p>
      <div
        style={{ justifyContent: "center", display: "flex", marginBottom: 10 }}
      >
        <div className={clsx(styles.arrowDown)}></div>
      </div>
      <Link href="https://www.google.com/maps/contrib/104008897910362075729/photos/@44.9906619,-93.1510711,17z/data=!4m3!8m2!3m1!1e1?hl=en-US">
        - Emiel Smeenk, St. Paul, MN
      </Link>
    </div>
  );
};

const Interview = () => {
  return (
    <div className="text--center padding-horiz--md">
      <h3>​​PAST TV INTERVIEW</h3>
      <p>
        In August 2017, Luke was interviewed by Ron Henderson on his show
        "Motivation", Minnesota Metro Cable Network - Channel 6. Luke shares his
        background and teaching philosophy in this video.
      </p>
      <YoutubeEmbed embedId="vMhcQFQVw4s" />
    </div>
  );
};

const Contact = () => {
  return (
    <div className={clsx("text--center padding-horiz--md")}>
      <h3 style={{ fontSize: 60 }}>​Contact</h3>
      <p>
        <a
          style={{ color: "white", textDecoration: "underline" }}
          href="mailto: LukeWangChineseTutor@gmail.com"
        >
          Email now
        </a>{" "}
        for a discounted one-on-one trial lesson and level assessment.
      </p>
      <p>
        Due to the COVID-19 pandemic, I am currently conducting all teaching
        online via Google Meet ​ <br />
        E-mail:{" "}
        <a
          style={{ color: "white", textDecoration: "underline" }}
          href="mailto: LukeWangChineseTutor@gmail.com"
        >
          LukeWangChineseTutor@gmail.com
        </a>{" "}
        Call:{" "}
        <a
          style={{ color: "white", textDecoration: "underline" }}
          href="Tel:507-403-9816"
        >
          (507) 403-9816
        </a>
      </p>
      <GoogleMapEmbed
        embedUrl={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.6874081455844!2d-93.15325978417387!3d44.99066087909833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b06230154b3%3A0xb91955a694afeebb!2s1636%20N%20Fernwood%20St%2C%20St%20Paul%2C%20MN%2055108!5e0!3m2!1sen!2sus!4v1671447287389!5m2!1sen!2sus"
        }
      />
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <section className={styles.layout}>
        <div className="container">
          <div className="row margin-bottom--lg">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <div className="row margin-bottom--lg">
            <Testimonials />
          </div>
          <div className="row margin-bottom--lg">
            <Interview />
          </div>
        </div>
      </section>
      <div className={clsx(styles.contact, "padding-top--lg")}>
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
