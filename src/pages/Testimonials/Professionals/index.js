import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import QuotePage from "../../../components/QuotePage";

const QuoteList = [
  {
    sentence: (
      <>
        I have been studying Chinese for 1 1/2 years, and of that time, the last
        two months has been with Luke Wang.
        <br />
        <br />
        The growth I have experienced since working with Luke has exceeded my
        greatest expectations (and I dream big). Luke's teaching goes beyond the
        scoop of traditional learning, he helps you to understand how the brain
        functions and how to best apply those concepts to the learning of this
        beautiful and complex language. Now for the first time, since studying
        Chinese, I speak with the speed and accuracy of a Chinese native.....and
        I am still amazed by that!
        <br />
        <br />
        Luke is truly in a league of his own! And I am privileged to be working
        with such a talented Laoshi.
      </>
    ),
    name: "Shantel B. (Flight Attendant)",
    location: "Chicago, IL",
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
        the students' have time.
        <br />
        <br />
        If you are looking for a hard-working, patient and all around excellent
        Mandarin teacher, I highly recommend Mr. Wang without any reservations.
      </>
    ),
    name: "David S. (USA Foreign Services)",
    location: "Faribault, MN",
  },
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
        <br />I am glad I chose Luke to help me with this task. He understood
        what I needed, and he was flexible enough to let me go at my own pace
        and adapt to what I wanted to work on. In particular, I was happy that
        he was willing to let me practice speaking on topics, both related to
        the test and my own personal interests. I appreciated being able to
        discuss cultural matters with a native speaker.
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
    name: "Leah M. (Teacher)",
    location: "Minneapolis, MN",
  },
];

const Page = () => {
  return (
    <Layout>
      <Header
        title={"TESTIMONIALS"}
        extra={<h1 style={{ fontWeight: "normal" }}>Professionals</h1>}
      />
      <main>
        <QuotePage QuoteList={QuoteList} />
      </main>
    </Layout>
  );
};

export default Page;
