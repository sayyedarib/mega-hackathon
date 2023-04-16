import React, { useState, useEffect } from "react";
import styles from "../styles/components/loginPopup.module.css";
import axios from "axios";
import { BACKEND_URL } from "next.config";
import jwt_decode from "jwt-decode";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const [type, setType] = useState("");
  const [user, setUser] = useState({
    type: "user",
    name: "",
    email: "",
    password: "",
    confirmpassword:"",
    team: [],
    about: "",
  });

  let name, value;
  const handleInput = (e) => {
    console.log(user)
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
console.log("submit button clicked")
    try {
      console.log("start response ", user);
      const response = await axios.post(`${BACKEND_URL}/api/signup`,user,
        {
          withCredentials: true,
        }
      );
console.log("response ", response)
      setUser({
        type:"",
        name:"",
        email: "",
        password: "",
        confirmpassword:"",
      });
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
            alt=""
          />
        </div>
        {type == "" ? (
          <div className={styles.userType}>
            {" "}
            <input type="select" name="type" value="User" onClick={()=>{setType("user"); {setUser({...user, type:"user"})}}} />
            <input type="select" name="type" value="Organization" onClick={()=>{setType("org"); {setUser({...user, type:"user"})}}} />
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

              <input type="submit" value="signUp" onClick={handleClick} />
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
