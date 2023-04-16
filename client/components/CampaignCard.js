import React, { useState, useEffect } from "react";
import styles from "../styles/components/newsCard.module.css";
import Link from "next/link";

const CampaignCard = ({
  title,
  purpose,
  email,
  phone,
  date,
  time,
  location,
  about,
}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.timeLocation}>
            <span>
              <h4>Date: {date}</h4>
              <h4>Time: {time}</h4>
              <h4>Location: {location}</h4>
              <h4>Purpose: {purpose}</h4>
            </span>
          </div>
          <div className={styles.desc}>
            <h3>{title}</h3>
            <span>{about}</span>
            <br />
          </div>
          <span>
            <h4>Contact:  {email}</h4>
           
          </span>
          <span>
            {" "}
            <h4>Phone:  {phone}</h4>
          </span>
        </div>
        <div className={styles.right}>
          {/* <img src={pic} alt="not found" /> */}
        </div>
      </div>
    </>
  );
};

export default CampaignCard;
