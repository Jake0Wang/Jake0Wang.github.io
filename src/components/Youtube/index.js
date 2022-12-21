import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, size }) => (
  <div className="video-responsive">
    <iframe
      width={size === "small" ? "480" : "853"}
      height={size === "small" ? "280" : "480"}
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
