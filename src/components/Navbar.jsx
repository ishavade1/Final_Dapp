// src/components/Navbar.jsx
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../assets/Header.png";

const Navbar = ({ onWhyClick }) => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Wallet connection error:", error);
        alert("Failed to connect wallet.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea} onClick={() => navigate("/")}>
        <img src={Header} alt="HonestGig Logo" className={styles.logoImg} />
        <span className={styles.logoText}>
          HONESTGIG<span>Hub</span>
        </span>
      </div>

      <div className={styles.topButtonBar}>
        <button className={styles.topButton} onClick={() => navigate("/find-talent")}>
          Find Talent
        </button>

        <button
          className={styles.topButton}
          onClick={onWhyClick || (() => navigate("/why-honestgig"))}
        >
          Why HonestGig
        </button>

        <button className={styles.topButton} onClick={connectWallet}>
          {walletAddress ? walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4) : "Connect Wallet"}
        </button>

        <button className={styles.topButton} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
