import React from "react";
import styles from "../styles/components/eventCard.module.css";
import Link from "next/link";

export default function EventCard({ title, date, time, desc, pic, link }) {
  {
    return (
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.timeLocation}>
            <span>
              <h4>Date: {date}</h4>
            </span>
            <br />
            <h4>Time: {time}</h4>
          </div>
          <div className={styles.desc}>
            <h3>{title}</h3>
            <span>{desc}</span>
            <br />
          </div>
          {link && <Link href={link}> More...</Link>}
        </div>
        <div className={styles.right}>
          <img src={pic} alt="not found" />
        </div>
      </div>
    );
  }
}
