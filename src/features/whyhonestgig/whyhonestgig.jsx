// src/features/whyhonestgig/whyhonestgig.jsx
import React from "react";
import styles from "./whyhonestgig.module.css";

const features = [
  {
    title: "Decentralized Reputation System",
    desc: "Ratings are stored on the blockchain — tamper-proof, transparent, and owned by freelancers.",
  },
  {
    title: "Smart-Contract Based Payments",
    desc: "Funds are securely held and auto-released on completion, ensuring fair, dispute-free payments for all.",
  },
  {
    title: "MetaMask Authentication",
    desc: "Users log in with crypto wallets—no passwords, just secure and seamless authentication.",
  },
  {
    title: "Low Commission Fees",
    desc: "Freelancers earn more; clients pay less.",
  },
  {
    title: "Transparent Work History",
    desc: "Every job and review is verifiable, ensuring accountability and trust.",
  },
];

const WhyHonestGig = () => {
  return (
    <div id="whyHonestGig" className={styles.whyWrapper}>
      <h2>"Verified Talent. Honest Work."</h2>
      <div className={styles.featureGrid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHonestGig;
