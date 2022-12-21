import React from "react";
import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import QuotePage from "../../../components/QuotePage";

const QuoteList = [
  {
    sentence: (
      <>
        Luke has been an incredible teacher/tutor. My son (7 yrs.) and daughter
        (10 yrs.) have had so much fun learning Mandarin Chinese. He knows how
        to simplify the complicated and is great at creating a personalized
        curriculum plan that’s right for you. He uses a variety of learning
        tools including games, videos, and “real life” role playing techniques.
        <br />
        <br />
        Luke’s patients for young ones is a treasure. He always takes the time
        to answer all of their questions, even if they are a bit off topic. One
        of my favorite skills is his attention to detail. He noticed my kids
        taking an interest in a Chinese chess game he had. Luke asked, “Do you
        think that is interesting? Would you like to learn how to play?” My kids
        replied with an enthusiastic “Yes!” So, he made a deal with them. The
        deal was if they tried real hard and learned all their new words really
        well, he would teach them how to play. My children have been so excited
        about having a chance to play; I don’t think they realize how hard they
        have worked or the fact they’ve had no intention of giving up. However,
        this parent has noticed!
        <br />
        <br />
        When a teacher/tutor can make learning as fun as a game; you know you’ve
        made the right choice. Thank you Luke!
      </>
    ),
    name: "Lana W. (Parent of homeschool Students)",
    location: "Minneapolis, MN",
  },
  {
    sentence: (
      <>
        Luke Wang is a great teacher and tutor, we highly recommend him. My son
        had a wonderful experience working with him during the summer of 2016 as
        he was working to advance a level in Chinese. Luke's method of daily
        short homework assignments really helped my son implement the new
        vocabulary into each lesson. Having twice weekly lessons not only
        improved my son's speaking skills, but also confidence while speaking
        Chinese. Luke's fluency and accuracy in Mandarin allowed my son to
        develop full and accurate tonality. As I parent, I really appreciated
        his frequent communications with me, keeping me updated and informed
        about my son's progress. We could not have been happier.
      </>
    ),
    name: "Ayse M. (Parent of High School Student)",
    location: "St. Paul, MN",
  },
  {
    sentence: (
      <>
        We have had Luke tutor our son, Philip since 2010. Philip has gone from
        a ‘C’ to a consistent ‘A’ in Chinese!
        <br />
        <br />
        Luke has done an amazing job of teaching Philip. His teaching style is
        one that incorporates motivation and persistent drilling. He meets with
        Philip once a week for two hours and converses in Chinese with him by
        phone nightly. They go over vocabulary, conversations and
        pronunciations.
        <br />
        <br />
        Luke has helped Philip become disciplined, and has motivated him to
        become more fluent in Chinese. Luke has turned Philip around to becoming
        an excellent student in Chinese. His persistence, patience, discipline
        and nightly conversations have made Philip love Chinese again. Philip is
        now planning to study Chinese in college.
      </>
    ),
    name: "Annette and David S. (Parents of Philip.10th Grade)",
    location: "St. Paul, MN",
  },
];

const Page = () => {
  return (
    <Layout>
      <Header
        title={"TESTIMONIALS"}
        extra={<h1 style={{ fontWeight: "normal" }}>Students</h1>}
      />
      <main>
        <QuotePage QuoteList={QuoteList} />
      </main>
    </Layout>
  );
};

export default Page;
