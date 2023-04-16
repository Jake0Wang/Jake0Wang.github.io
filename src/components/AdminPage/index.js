import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const AdminPage = () => {
  const [youtubeCode, setYoutubeCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [answer, setAnswer] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // new state variable

  useEffect(() => {
    setIsValid(false);

    if (youtubeCode && title && description) {
      setIsValid(true);
      setIsSent(false);
    }
  }, [youtubeCode, title, description, answer]);

  const handleClick = async () => {
    try {
      const data = {
        video_code: youtubeCode,
        title,
        description,
        answer,
      };

      setIsLoading(true); // set loading state to true

      const response = await fetch(
        "https://vasqhjczkzaqsexezhhn.functions.supabase.co/youtube-videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSent(true);
        setYoutubeCode("");
        setTitle("");
        setDescription("");
        setAnswer("");
      }
    } catch (error) {
      console.error(error);
      setIsSent(false);
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }

    setIsLoading(false); // set loading state to false once response is received
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
            {isLoading ? "Sending..." : isSent ? "Submitted" : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
