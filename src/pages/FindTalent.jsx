import React from "react";
import styles from "./findtalent.module.css";

// ✅ Import local images
import johnImg from "../assets/john.png";
import maryImg from "../assets/mary.png";
import lucyImg from "../assets/lucy.png";

// ✅ Freelancer data
const freelancers = [
  {
    name: "John J.",
    rate: "$35/hr",
    rating: 4.3,
    skills: ["Javascript", "Web Design", "React Native"],
    image: johnImg,
  },
  {
    name: "Mary N.",
    rate: "$25/hr",
    rating: 4.5,
    skills: ["Javascript", "PHP"],
    image: maryImg,
  },
  {
    name: "Lucy J.",
    rate: "$45/hr",
    rating: 4.9,
    skills: ["Javascript", "HTML", "MySQL", "React.js"],
    image: lucyImg,
  },
];

const FindTalent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>HIRE THE BEST FREELANCER</h1>
      <div className={styles.cardGrid}>
        {freelancers.map((freelancer, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.rate}>{freelancer.rate}</div>
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className={styles.avatar}
            />
            <h3>{freelancer.name}</h3>
            <p className={styles.rating}>⭐ {freelancer.rating}/5</p>
            <div className={styles.skills}>
              {freelancer.skills.map((skill, i) => (
                <span key={i} className={styles.skill}>{skill}</span>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.chatBtn}>Chat</button>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTalent;
