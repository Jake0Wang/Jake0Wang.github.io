import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";
import pic1 from "../../static/img/rotatedBg1.jpeg";
import pic2 from "../../static/img/rotatedBg2.jpeg";
import pic3 from "../../static/img/rotatedBg3.jpeg";
import pic4 from "../../static/img/rotatedBg4.jpeg";
import pic5 from "../../static/img/rotatedBg5.jpeg";
import styles from "./index.module.css";

const pics = [pic2, pic3, pic1, pic4, pic5];
const delay = 6000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("left");
  const [count, setCount] = useState(1);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (dir === "left") {
        setIndex((prevIndex) => prevIndex + 1);
      }

      if (dir === "right") {
        setIndex((prevIndex) => prevIndex - 1);
      }

      setCount((prevCount) => prevCount + 1);

      // setIndex((prevIndex) =>
      //   prevIndex === pics.length - 1 ? 0 : prevIndex + 1
      // );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    if (count === pics.length - 1) {
      setCount(0);
      if (dir === "left") {
        setDir("right");
      }
      if (dir === "right") {
        setDir("left");
      }
    }
  }, [count]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {pics.map((pic, index) => (
          <div key={index} style={{ display: "inline-block" }}>
            <img className={styles.slide} src={pic} alt={pic} />
            <img className={styles.slide} src={pic} alt={pic} />
          </div>
        ))}
      </div>
    </div>
  );
}

const HomepageHeader = () => {
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
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <Slideshow />
        <Homepage />
      </main>
    </Layout>
  );
};

export default Home;
