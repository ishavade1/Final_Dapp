import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Import navigation hook
import styles from "./homegig.module.css";
import Homeimg from "../../assets/Homeimg.png";

const Homegig = () => {
  const navigate = useNavigate(); // ⬅️ Initialize navigate

  const handleGetStarted = () => {
    navigate("/signup"); // ⬅️ Navigate to signup
  };

  return (
    <div className={styles.heroWrapper}>
      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1>
          FIRST DECENTRALIZED APP
          <br />
          FOR FREELANCERS
        </h1>
        <div className={styles.avatarStrip}>
          <img src={Homeimg} alt="Freelancer Avatar" className={styles.mainVisual} />
        </div>
        <button className={styles.cta} onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Homegig;
