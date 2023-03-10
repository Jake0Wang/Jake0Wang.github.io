import styles from "./styles.module.css";
import React from "react";

function GoogleMapEmbed({ embedUrl }) {
  return (
    <div className={styles.mapSize}>
      <iframe
        src={embedUrl}
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        title="Embedded google map"
      ></iframe>
    </div>
  );
}

export default GoogleMapEmbed;
