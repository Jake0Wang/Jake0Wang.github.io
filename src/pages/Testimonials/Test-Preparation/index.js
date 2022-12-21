import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import QuotePage from "../../../components/QuotePage";

const QuoteList = [
  {
    sentence: (
      <>
        When I started working with Luke, I had one specific goal: to pass the
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
        cultural matters with a native speaker.
        <br />
        <br />
        Like most students of Chinese, I learned about Chinese New Year in my
        Chinese classes, but I feel that working with Luke really helped me
        deepen my knowledge of such cross-cultural situations. The short-term
        benefit of such knowledge, of course, is that it helped me pass my test.
        But the long-term benefit is that I feel I can build on that knowledge
        to expand my understanding of China and Chinese culture, and to inform
        my teaching practices in the future. Thank you, Luke, for sharing your
        language and cultural insights with me. I shall be forever grateful.
      </>
    ),
    name: "Leah M. (Preparing for MTLE subtest 2)",
    location: "Minneapolis, MN",
  },
  {
    sentence: (
      <>
        Luke is an excellent tutor, and I highly recommend him. I saw Luke for 6
        weeks prior to taking a college Chinese language placement exam. He
        listened closely to my needs and schedule, and came to our first meeting
        with the books we needed and a lesson ready to go.
        <br />
        <br />
        Not only was he an engaging teacher, but he also introduced me to useful
        study tools and Chinese art and culture. After 6 weeks I felt very
        confident going into my test, and got into the level class I was hoping
        for.
        <br />
        <br />
        Thanks Luke!
      </>
    ),
    name: "Galen P. (Preparing for University Placement Test)",
    location: "Minneapolis, MN",
  },
  {
    sentence: (
      <>
        I highly recommend Mr. Wang as a Mandarin Chinese tutor. He is an
        excellent teacher, being very patient in explaining, and as necessary
        repeating, the difficult nuances of speaking and reading Mandarin. He is
        a master in integrating technology into his teaching method. Building
        vocabulary lists that students can easily review when they are on the
        internet, allowing them to review at their own convenience. He makes
        learning enjoyable by integrating Chinese language videos, stories, and
        news items, as appropriate, to allow the student to listen and try to
        comprehend different speeds of speaking and slightly different accents
        of a variety of Mandarin speakers.
        <br />
        <br />
        I highly recommend Mr. Wang as a Mandarin Chinese tutor. He is an
        excellent teacher, being very patient in explaining, and as necessary
        repeating, the difficult nuances of speaking and reading Mandarin. He is
        a master in integrating technology into his teaching method. Building
        vocabulary lists that students can easily review when they are on the
        internet, allowing them to review at their own convenience. He makes
        learning enjoyable by integrating Chinese language videos, stories, and
        news items, as appropriate, to allow the student to listen and try to
        comprehend different speeds of speaking and slightly different accents
        of a variety of Mandarin speakers. Mr. Wang has excellent English
        communication skills which assists in conducting his lessons. Any
        questions that arise he is able to address and he understands English
        idioms which, in my experience, is not the norm for someone who was not
        born in an English speaking country. Overall his communication and
        interpersonal skills are excellent.
        <br />
        <br />
        Mr. Wang is flexible in arranging time to tutor his students. He will
        strive to accommodate his students' requested times to the best of his
        ability. This assists in allowing his students to take his classes when
        the students' have time.
        <br />
        <br />
        If you are looking for a hard-working, patient and all around excellent
        Mandarin teacher, I highly recommend Mr. Wang without any reservations.
      </>
    ),
    name: "David S. (Preparing for USA Foreign Services Language Proficiency Test)",
    location: "Faribault, MN",
  },
];

const Page = () => {
  return (
    <Layout>
      <Header
        title={"TESTIMONIALS"}
        extra={<h1 style={{ fontWeight: "normal" }}>Test Preparation</h1>}
      />
      <main>
        <QuotePage QuoteList={QuoteList} />
      </main>
    </Layout>
  );
};

export default Page;
