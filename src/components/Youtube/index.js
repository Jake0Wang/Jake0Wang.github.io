import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.css";

const YoutubeEmbed = ({ embedId, width, height }) => (
  <div className={clsx(styles.youtubeSize)}>
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
