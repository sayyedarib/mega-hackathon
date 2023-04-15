import React, { useState, useEffect } from "react";
import styles from "../styles/components/newsCard.module.css";
import Link from "next/link";

const NewsCard = ({title, desc, date, link}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.timeLocation}>
            <span>
              <h4>Date: {date}</h4>
            </span>
          </div>
          <div className={styles.desc}>
            <h3>{title}</h3>
            <span>{desc}</span>
            <br />
          </div>
          {link && <Link href={link}> More...</Link>}
        </div>
        <div className={styles.right}>
          {/* <img src={pic} alt="not found" /> */}
        </div>
      </div>
    </>
  );
};

export default NewsCard;
