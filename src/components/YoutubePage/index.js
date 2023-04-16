import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import YoutubeEmbed from "../Youtube";

const Youtube = ({ video_code, title, description, answer }) => {
  return (
    <div
      className={clsx(
        "text--center padding-horiz--md padding--lg",
        styles.youtubeLayout
      )}
    >
      <YoutubeEmbed embedId={video_code} width={480} height={280} />
      <div className={clsx(styles.description)}>
        <h3>{title}</h3>
        <p>{description}</p>
        {answer && (
          <>
            <div className={styles.dashed}></div>
            <h3>Answers for the video questions:</h3>
            <p>{answer}</p>
          </>
        )}
      </div>
    </div>
  );
};

const YoutubePage = () => {
  const [youtubeList, setYoutubeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://vasqhjczkzaqsexezhhn.functions.supabase.co/youtube-videos"
      );
      const data = await response.json();
      setYoutubeList(data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.layout}>
      <div className="container">
        <div className="row margin-bottom--lg">
          {youtubeList.map((props, idx) => (
            <Youtube key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubePage;
