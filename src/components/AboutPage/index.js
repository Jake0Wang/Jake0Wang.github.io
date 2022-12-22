import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import profile from "../../../static/img/profile.webp";
import pic from "../../../static/img/basketballSuperStar.webp";
import YoutubeEmbed from "../Youtube";

const BusinessCard = () => {
  return (
    <div className="center">
      <div className={clsx("col col--4 padding--none")}>
        <img src={profile} alt="profile pic" />
      </div>
      <div className={clsx("col col--8 vert-center padding--none")}>
        <div className="container">
          <div className="row center">
            <h2 className={clsx(styles.name)}>Luke Wang</h2>
          </div>
          <div className="row center margin-horiz--md text--center">
            <h4 style={{ color: "#D1E0EB" }}>
              Chinese Language Tutor & Culture Consultant
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <>
      <div
        className={clsx("col col--8 vert-center")}
        style={{ color: "#0C3C60" }}
      >
        <p>
          I was born and raised in Shanghai and I graduated from Saint Olaf
          College in 2010. I have been working as an entrepreneur, Chinese
          tutor, language and cultural consultant in the Twin Cities for 9
          years. I have worked with students ranging in age from 4 year-old
          beginners to 75 year-old professionals. I have worked with students
          from all across the states.
          <br />
          ​<br />I have given Chinese language lessons to more than 800 students
          from various schools in Minnesota including Yinghua Academy, St. Paul
          Academy, Breck School, University of Minnesota, Hamline University,
          St. Olaf College, Concordia Language Villages, etc.
          <br />
          ​<br />
          My adult students range from business leaders at the Apple Store of
          Minneapolis, to a US diplomat in Taiwan, to English teachers currently
          working in China, to international lawyers, to a multinational
          newspaper owner from South Carolina. Through my business, I have also
          provided cultural and language consulting to various organizations
          including the Minnesota Timberwolves in 2016 and 2017.
          <br />
          ​<br />
          Over the past few years, I have developed a consistent and effective
          method to help students who struggle with character memorization, tone
          recognition, and sentence building. My Mandarin Chinese programs
          include face-to-face private Chinese lessons both online and in
          person.
        </p>
      </div>
      <div className={clsx("col col--4 vert-center")}>
        <img src={pic} alt="pic with basketball superstar" />
      </div>
    </>
  );
};

const StoryWithYoutubeOne = () => {
  return (
    <>
      <div className={clsx("col col--6 vert-center")}>
        <YoutubeEmbed embedId={"ii6vIiBKMHM"} width={480} height={280} />
      </div>
      <div
        className={clsx("col col--6 vert-center")}
        style={{ color: "#0C3C60" }}
      >
        <p>
          In early 2016, I assisted the Minnesota Timberwolves with writing,
          instructing, and producing this promotional video for Karl-Anthony
          Towns, an increasingly popular basketball player.
          <br />
          ​<br />
          The video targets Chinese audiences, and it helped Towns secure
          international votes to appear in the NBA All Star Game of 2016.
          <br />
          ​<br />
          The fluent little actors in the video are all students who I have been
          working with for years.
        </p>
      </div>
    </>
  );
};

const StoryWithYoutubeTwo = () => {
  return (
    <>
      <div className={clsx("col col--6 vert-center")}>
        <YoutubeEmbed embedId={"PMR6HpWvedE"} width={480} height={280} />
      </div>
      <div
        className={clsx("col col--6 vert-center")}
        style={{ color: "#0C3C60" }}
      >
        <p>
          During the Chinese New Year of 2017, invited as the language
          consultant, I gave personalized lessons to the basketball players at
          the Minnesota Timberwolves.
          <br />
          ​<br />
          While the Timberwolves made a special effort to reach out to the
          Chinese speaking audience, I helped to facilitate and translate the
          interviews with the Chinese speaking students and immigrants.
        </p>
      </div>
    </>
  );
};

const AboutPage = () => {
  return (
    <section>
      <div className="container margin-bottom--xl center">
        <div className={clsx("row margin-bottom--lg", styles.profile)}>
          <BusinessCard />
        </div>
      </div>
      <div className="container margin-bottom--xl">
        <div className={clsx("row margin-bottom--lg")}>
          <Story />
        </div>
        <div className={clsx("row margin-bottom--lg")}>
          <StoryWithYoutubeOne />
        </div>
        <div className={clsx("row margin-bottom--lg")}>
          <StoryWithYoutubeTwo />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
