import React, { useState, useEffect } from "react";
import styles from "../styles/components/loginPopup.module.css";
import axios from "axios";
import { BACKEND_URL } from "next.config";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const OrganizeCampaign = () => {
  const [campaign, setCampaign] = useState({
    title: "",
    purpose: "",
    email: "",
    time:"",
    date:"",
    location: "",
    phone: "",
    about: "",
  });

  const handleInput = (e) => {
    console.log(campaign);
    const { name, value } = e.target;
    setCampaign((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("submit button clicked");
    try {
      console.log("start response ", campaign);
      const response = await axios.post(`${BACKEND_URL}/api/organizecampaign`, campaign, {
        withCredentials: true,
      });
      console.log("response ", response);
      setCampaign({
        title: "",
        purpose: "",
        about: "",
        location: "",
        time:"",
        date:"",
        phone: "",
        email: "",
      });
      router.push("/");
    } catch (err) {
      console.log("error while login data ", err);
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <img
            style={{ width: "350px", height: "auto" }}
            src="/images/vector/campaign.jpg"
            alt="vector image not found"
          />
        </div>{" "}
        
        <div className={styles.right}>
          {/* <div className={styles.iconHeader}>
              <button className={styles.cross}>
                <img src="/images/icon/close-icon.svg" />
              </button>
            </div> */}
          <h3>Organize Campaign</h3>
          <form method="post" className={styles.form}>
            <input
              value={campaign.title}
              onChange={handleInput}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
            />
            <input
              value={campaign.purpose}
              onChange={handleInput}
              type="text"
              name="purpose"
              id="purpose"
              placeholder="Purpose"
              required
            />
            <input
              value={campaign.location}
              onChange={handleInput}
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              required
            />
                        <input
              value={campaign.date}
              onChange={handleInput}
              type="text"
              name="date"
              id="date"
              placeholder="Date"
              required
            />
                        <input
              value={campaign.time}
              onChange={handleInput}
              type="text"
              name="time"
              id="time"
              placeholder="Timings"
              required
            />

            <input
              value={campaign.email}
              onChange={handleInput}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              value={campaign.number}
              onChange={handleInput}
              type="number"
              name="phone"
              id="phone"
              placeholder="Contact number"
              required
            />
            <textarea
            rows="6"
              value={campaign.about}
              onChange={handleInput}
              type="text"
              name="about"
              id="about"
              placeholder="write about campaign in brief"
              required
            />

            <input type="submit" value="Organize" onClick={handleClick} />
          </form>
        </div>
        
      </div>
    </>
  );
};

export default OrganizeCampaign;
