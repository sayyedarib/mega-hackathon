import React, { useState, useEffect } from "react";
import styles from "../styles/components/loginPopup.module.css";
import axios from "axios";
import { BACKEND_URL } from "next.config";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    type: "",
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    team: [],
    about: "",
  });

  let name, value;
  const handleInput = (e) => {
    console.log(user);
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("submit button clicked");
    try {
      console.log("start response ", user);
      const response = await axios.post(`${BACKEND_URL}/api/signup`, user, {
        withCredentials: true,
      });
      console.log("response ", response);
      setUser({
        type: "",
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        about: "",
      });
      router.push("/LoginPopup");
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
            src="/images/vector/login.jpg"
            alt="vector image not found"
          />
        </div>
        {user.type == "" ? (
          <div className={styles.userType}>
            {" "}
            <input
              type="select"
              name="type"
              value="User"
              onClick={() => {
                setUser({ ...user, type: "user" });
              }}
            />
            <input
              type="select"
              name="type"
              value="Organization"
              onClick={() => {
                setUser({ ...user, type: "org" });
              }}
            />
          </div>
        ) : (
          <div className={styles.right}>
            {/* <div className={styles.iconHeader}>
              <button className={styles.cross}>
                <img src="/images/icon/close-icon.svg" />
              </button>
            </div> */}
            <h3>Sign Up</h3>
            <form method="post" className={styles.form}>
              <input
                value={user.name}
                onChange={handleInput}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                value={user.email}
                onChange={handleInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                value={user.password}
                onChange={handleInput}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <input
                value={user.confirmpassword}
                onChange={handleInput}
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                required
              />
              {user.type == "org" && (
                <textarea
                  rows="6"
                  value={user.about}
                  onChange={handleInput}
                  type="text"
                  name="about"
                  id="about"
                  placeholder="about org"
                  required
                />
              )}

              <input type="submit" value="signUp" onClick={handleClick} />
            </form>
            <Link href="/LoginPopup">
              If you are existing user please LogIn
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
