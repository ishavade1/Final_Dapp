import React from "react";
import styles from "./LoginPage.module.css";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

const LoginPage = () => {
  return (
    <>
      <Navbar /> {/* ✅ Show Navbar on Login Page */}
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Login with MetaMask</h2>

          <label className={styles.loginLabel}>Choose Account</label>
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Enter your wallet address"
          />

          <label className={styles.loginLabel}>Role</label>
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Enter your role"
          />

          <button className={styles.loginButton}>Login</button>

          <div className={styles.reviewsSection}>
            <button className={styles.reviewsButton}>
              Check Reviews / Give Reviews
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
