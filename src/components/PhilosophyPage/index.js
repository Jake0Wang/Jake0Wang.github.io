import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import pic1 from "../../../static/img/philosophy1.webp";
import pic2 from "../../../static/img/philosophy2.webp";
import pic3 from "../../../static/img/philosophy3.webp";
import pic4 from "../../../static/img/philosophy4.webp";

const StoryList = [
  {
    pic: pic1,
    title: "STRONG FOUNDATION",
    paragraph: (
      <p>
        The first year is a critical one because it builds the base of the
        language knowledge, and students will have to rely on this foundation
        throughout their Chinese speaking careers.
        <br />
        <br />
        It is also the introduction of a new language, and it needs to be
        something that students enjoy and are excited to learn. Often times if
        the student is struggling, it can be very discouraging for them as well
        as affect their feelings toward wanting to learn another language!
        <br />
        <br />I tailor my teaching toward the specific needs of the students and
        focus on practicality in their future communication and interaction with
        Chinese natives.
      </p>
    ),
  },
  {
    pic: pic2,
    title: "GROWTH",
    paragraph: (
      <p>
        In intermediate to advanced levels, I incorporate knowledge of Chinese
        culture, custom, and social and professional etiquette in my teaching.
        <br />
        <br />
        I believe that learning a language is like learning to swim. Traditional
        language learning systems often stopped at building a rough connection
        between the new words and the ones in our mother language. While these
        systems help students get better at translating and understanding, many
        students still have trouble speaking and forming sentences.
        <br />
        <br />
        In my experience as a language teacher as well as a student, in order to
        speak a language fluently, we need consistent reinforcements and
        exposures to establish and enhance the "muscle memory". The "muscle
        memory" connects the new language directly to our THOUGHTS and IDEAS,
        skipping our mother language entirely.
      </p>
    ),
  },
  {
    pic: pic3,
    title: "CUSTOMIZATION",
    paragraph: (
      <p>
        The organization of my teaching is highly customized to the learning
        style, time and expectations of my students.
        <br />
        <br />
        I found a two-tier approach to be most effective with the majority of
        the adults I have worked with. On a weekly basis, this two-tier approach
        involves intense and frequent conversation sessions, as wells as writing
        and reading sessions.
        <br />
        <br />
        The conversations are intended to improve the speaking and the
        application of the newly studied words and sentence patterns. These
        frequent sessions are intended to mimic an immersion environment. I will
        usually only speak Chinese during these sessions. Because these sessions
        are relatively short, we can accomplish them through phone calls or live
        video chat when most convenient for you.
        <br />
        <br />
        In the writing and reading sessions, we will focus on new sentence
        patterns and vocabulary. I will provide explanations and tips in both
        Chinese and English. We will also spend time working on character
        writing and reading. I will recommend suitable textbooks, but I can also
        work with any textbook if you already have one that you like.
      </p>
    ),
  },
  {
    pic: pic4,
    title: "TECHNOLOGY & TOOLS",
    paragraph: (
      <p>
        Suitable technology and tools help to improve our access to learning
        resources. They also improve the efficiency of our language retention.
        In order to maximize the effectiveness of my lessons, I utilize various
        computer tools and online resources during and after my lessons.
        <br />
        <br />
        These tools, which include online flash cards, interactive pronunciation
        practice, video comprehension programs, character-writing demonstration
        tools, and vocabulary retention calculators, are essential for
        sustaining the momentum of classroom learning.
        <br />
        <br />
        By utilizing these tools for learning, my students have greatly improved
        their vocabulary and language patterns memorization process. This is
        accomplished through a particular system called "Spaced Repetition",
        which emphasizes a consistent and strategic review schedule in order to
        achieve learning targets.
      </p>
    ),
  },
];

const Story = ({ pic, paragraph, title }) => {
  return (
    <div className={clsx("row margin-bottom--xl margin-horiz--xl")}>
      <div className={clsx("col col--4 vert-center")}>
        <img src={pic} alt="pic with basketball superstar" />
      </div>
      <div className={clsx("col col--8")} style={{ color: "#0C3C60" }}>
        <h1>{title}</h1>
        {paragraph}
      </div>
    </div>
  );
};

const PhilosophyPage = () => {
  return (
    <section>
      <div className="container margin-bottom--xl">
        {StoryList.map((props, idx) => (
          <Story key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default PhilosophyPage;
