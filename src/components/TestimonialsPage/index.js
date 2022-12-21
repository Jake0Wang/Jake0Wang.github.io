import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const TestimonialList = [
  {
    title: "STUDENTS",
    description: (
      <>
        "Luke has been an incredible teacher/tutor. My son (7 yrs.) and daughter
        (10 yrs.) have had so much fun learning Mandarin Chinese. He knows how
        to simplify the complicated and is great at creating a personalized
        curriculum plan that’s right for you.
        <br />
        <br />
        He uses a variety of learning tools including games, videos, and “real
        life” role playing techniques. Luke’s patients for young ones is a
        treasure. He always takes the time to answer all of their questions,
        even if they are a bit off topic. One of my favorite skills is his
        attention to detail. He noticed my kids taking an interest in a Chinese
        chess game he had. Luke asked, “Do you think that is interesting? Would
        you like to learn how to play?” My kids replied with an enthusiastic
        “Yes!” So, he made a deal with them. The deal was if they tried real
        hard and learned all their new words really well, he would teach them
        how to play. My children have been so excited about having a chance to
        play; I don’t think they realize how hard they have worked or the fact
        they’ve had no intention of giving up. However, this parent has noticed!
        When a teacher/tutor can make learning as fun as a game; you know you’ve
        made the right choice. Thank you Luke. "
        <br />
        <br /> - Lana W, Minneapolis, MN
      </>
    ),
  },
  {
    title: "PROFESSIONALS",
    description: (
      <>
        "I highly recommend Mr. Lejing Wang as a Mandarin Chinese tutor. He is
        an excellent teacher, being very patient in explaining, and as necessary
        repeating, the difficult nuances of speaking and reading Mandarin.
        Building vocabulary lists that students can easily review when they are
        on the internet, allowing them to review at their own convenience.
        <br />
        <br />
        Mr. Wang has excellent English communication skills which assists in
        conducting his lessons. Any questions that arise he is able to address
        and he understands English idioms which, in my experience, is not the
        norm for someone who was not born in an English speaking country.
        Overall his communication and interpersonal skills are excellent.
        <br />
        <br />
        Mr. Wang is flexible in arranging time to tutor his students. He will
        strive to accommodate his students' requested times to the best of his
        ability. This assists in allowing his students to take his classes when
        the students' have time. If you are looking for a hard-working, patient
        and all around excellent Mandarin teacher, I highly recommend Mr. Wang
        without any reservations."
        <br />
        <br />- David S, (online lesson with Luke), Faribault, MN
      </>
    ),
  },
  {
    title: "TEST PREPAPATION",
    description: (
      <>
        " When I started working with Luke, I had one specific goal: to pass the
        MTLE subtest 2 for Chinese Mandarin. This test is one of the licensing
        tests required for teachers of Chinese as a Foreign Language in
        Minnesota. For a native speaker of Chinese, the licensing tests do not
        pose a serious challenge, but I am not a native speaker. Prior to
        meeting with Luke, I had already taken several years of Chinese at the
        university level. I had also been accepted to the licensing program at
        the University of Minnesota for teaching Chinese, and I had passed the
        first subtest. Nonetheless, subtest 2 was a daunting challenge for me
        because it required me to speak and write spontaneously, so I decided to
        hire a tutor to help me.
        <br />
        <br />
        I am glad I chose Luke to help me with this task. He understood what I
        needed, and he was flexible enough to let me go at my own pace and adapt
        to what I wanted to work on. In particular, I was happy that he was
        willing to let me practice speaking on topics, both related to the test
        and my own personal interests. I appreciated being able to discuss
        cultural matters with a native speaker... "
        <br />
        <br />- Leah M. Teacher from Minneapolis, MN
      </>
    ),
  },
];

const Testimonial = ({ title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div
        className={clsx(
          "text--center padding-horiz--md margin--md padding--lg",
          styles.testimonials
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
          More
        </Link>
      </div>
    </div>
  );
};

const Testimonialspage = () => {
  return (
    <section className={styles.layout}>
      <div className="container margin-bottom--xl">
        <div className="row margin-bottom--lg">
          {TestimonialList.map((props, idx) => (
            <Testimonial key={idx} {...props} />
          ))}
        </div>
        <div className={clsx("row", styles.quote)}>
          <p style={{ margin: "10px" }}>
            No one is too young nor too old to start the process of learning
            another language. and the sooner, the better!
          </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: 10,
          }}
        >
          <div className="arrowDown"></div>
        </div>
        <Link to="" className={styles.link}>
          <h1 className={styles.textLink}>Let's Meet!</h1>
        </Link>
      </div>
    </section>
  );
};

export default Testimonialspage;
