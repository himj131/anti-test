"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <div className={styles.logoDot} />
            <div className={styles.logoRing} />
          </div>
          <span className={styles.logoText}>Antigravity</span>
        </div>

        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#playground" className={styles.navLink}>Playground</a>
          <a href="#comparison" className={styles.navLink}>Zero-G Tech</a>
          <a href="#gravity-center" className={styles.navLink}>Gravity Center</a>
        </nav>

        <div className={styles.actions}>
          <a href="#gravity-center" className={styles.btnSecondary}>
            Adjust Gravity
          </a>
          <button className={styles.btnPrimary} onClick={() => alert("Launching Antigravity Cloud IDE...")}>
            Launch Zero-G IDE
          </button>
        </div>
      </div>
    </header>
  );
}
