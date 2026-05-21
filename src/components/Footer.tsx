"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.logoDot} />
            </div>
            <span className={styles.logoText}>Antigravity</span>
          </div>
          <p className={styles.desc}>
            Built in Zero Gravity. <br />
            Defying the gravity of software engineering.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Product</h4>
            <a href="#features" className={styles.link}>Features</a>
            <a href="#playground" className={styles.link}>Playground</a>
            <a href="#comparison" className={styles.link}>Zero-G Tech</a>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Developer</h4>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
            <a href="#gravity-center" className={styles.link}>Zero-G Lab</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); alert("Docs are under gravity-free construction."); }} className={styles.link}>Documentation</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Antigravity. Built with Next.js & Pure CSS. All rights weightless.
          </p>
          <div className={styles.socials}>
            <span className={styles.socialLink}>✦ Google DeepMind Advanced Agentic Coding Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
