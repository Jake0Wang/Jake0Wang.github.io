import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import axios from "axios";

const AdminPage = () => {
  const [youtubeCode, setYoutubeCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [answer, setAnswer] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(false);

    if (youtubeCode && title && description) {
      setIsValid(true);
    }
  }, [youtubeCode, title, description, answer]);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "https://2413-24-188-229-60.ngrok-free.app/functions/v1/youtube-videos",
        {
          youtubeCode,
          title,
          description,
          answer,
        }
      );
    } catch (error) {
      console.error(error);
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    }
  };

  return (
    <section>
      <div className="container margin-bottom--xl center">
        <div className={clsx("row", styles.form)}>
          <input
            type="text"
            placeholder="Youtube Code"
            value={youtubeCode}
            onChange={(e) => setYoutubeCode(e.target.value)}
            className={clsx(styles.input)}
          />
          <textarea
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={clsx(styles.input)}
          />
          <textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={clsx(styles.input)}
            rows="4"
          />
          <textarea
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={clsx(styles.input)}
            rows="4"
          />

          <button
            disabled={!isValid}
            onClick={handleClick}
            className={clsx(styles.button)}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
