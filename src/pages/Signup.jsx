import React from "react";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";

import fiverrIcon from "../assets/icons/fiverr.jpg";
import upworkIcon from "../assets/icons/upwork.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/homegig");
  };

  return (
    <div className={styles.fullPageBackground}>
      <div className={styles.signupContainer}>
        <div className={styles.signupBox}>
          <h2>Sign up to find work you love</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>

          <div className={styles.divider}>
            <hr />
            <span>Other Sign Up options</span>
            <hr />
          </div>

          <div className={styles.iconRow}>
            <img src={fiverrIcon} alt="Fiverr" />
            <img src={upworkIcon} alt="Upwork" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
