import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import YoutubeEmbed from "../Youtube";
import ReactPaginate from "react-paginate";

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

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((props, idx) => <Youtube key={idx} {...props} />)}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

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

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = youtubeList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(youtubeList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % youtubeList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className={styles.paginationLayout}>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName={clsx(styles.paginationItem)}
          pageLinkClassName={clsx(styles.paginationItem)}
          previousClassName={clsx(styles.paginationItem)}
          previousLinkClassName={clsx(styles.paginationItem)}
          nextClassName={clsx(styles.paginationItem)}
          nextLinkClassName={clsx(styles.paginationItem)}
          breakLabel="..."
          breakClassName={clsx(styles.paginationItem)}
          breakLinkClassName={clsx(styles.paginationItem)}
          containerClassName={clsx(styles.pagination)}
          activeClassName={clsx(styles.active)}
        />
      </div>
    </>
  );
}

const YoutubePage = () => {
  return (
    <section className={styles.layout}>
      <div className="container">
        <div className="row margin-bottom--lg">
          <PaginatedItems itemsPerPage={5} />
        </div>
      </div>
    </section>
  );
};

export default YoutubePage;
