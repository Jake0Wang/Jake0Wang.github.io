import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import YoutubeEmbed from "../Youtube";

const YoutubeList = [
  {
    videoCode: "sJztVid8SFc",
    title: <>Top 5 ways to use Verb + 起来 (qi lai)</>,
    description: (
      <>
        In this video, we discuss the top 5 ways 起来 (qi lai) is used as a verb
        complement. The meaning varies quite a lot.
      </>
    ),
    answer: (
      <>
        Answers for the final challenge: 请把这件礼物包起来。
        这个月我的工作忙起来了。 你家看起来真干净。
      </>
    ),
  },
  {
    videoCode: "EKcSdYks2gE",
    title: <>Chinese Sentence Structure</>,
    description: (
      <>
        Chinese sentence structure is very different from English. A lot of
        students are confused by how to properly put words together. In this
        video, we are going to talk about how to build a statement and a
        question properly in Chinese. I will go more in depth into other types
        of questions such as "yes or no", "A or B", or "how and why" in the
        future videos.
      </>
    ),
  },
  {
    videoCode: "xTTOHJv-RzU",
    title: <>比较 comparison in Chinese</>,
    description: (
      <>
        In this video, we are going to talk about how to properly use the
        patterns for making a comparison in Chinese: A 比 B + adj. A 跟 B 一样 +
        adj.
      </>
    ),
  },
];

const Youtube = ({ videoCode, title, description, answer }) => {
  return (
    <div
      className={clsx(
        "text--center padding-horiz--md padding--lg",
        styles.youtubeLayout
      )}
    >
      <YoutubeEmbed embedId={videoCode} width={480} height={280} />
      <div className={clsx(styles.description)}>
        <h3>{title}</h3>
        <p>{description}</p>
        {answer && (
          <>
            <div className={styles.dashed}></div> <p>{answer}</p>
          </>
        )}
      </div>
    </div>
  );
};

const YoutubePage = () => {
  return (
    <section className={styles.layout}>
      <div className="container">
        <div className="row margin-bottom--lg">
          {YoutubeList.map((props, idx) => (
            <Youtube key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubePage;
