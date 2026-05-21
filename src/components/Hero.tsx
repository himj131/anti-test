"use client";

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative Glows */}
      <div className={`${styles.glow} ${styles.glowPurple}`} />
      <div className={`${styles.glow} ${styles.glowCyan}`} />
      
      {/* Grid Pattern */}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.tagPulse} />
            <span className={styles.tagText}>AGENTIC CO-PILOT IN ZERO-G</span>
          </div>
          
          <h1 className={styles.title}>
            Defy the Gravity of <br />
            <span className="text-gradient-purple-cyan">Complex Coding.</span>
          </h1>
          
          <p className={styles.description}>
            개발의 고통과 무거운 복잡함을 덜어내세요. 
            <strong> 안티그래비티</strong>는 터미널 직접 실행, 정밀한 멀티-청크 코드 리팩토링, 
            저장소 지식 학습을 수행하는 초고속 AI 에이전트 코딩 파트너입니다.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#gravity-center" className={styles.btnPrimary}>
              Antigravity 체험하기
            </a>
            <a href="#playground" className={styles.btnSecondary}>
              터미널 플레이그라운드
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>0 G</span>
              <span className={styles.statLbl}>Frictionless Build</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statVal}>10x</span>
              <span className={styles.statLbl}>Engineering Speed</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLbl}>Context-Aware</span>
            </div>
          </div>
        </div>

        {/* Floating Zero-G Workspace Showcase */}
        <div className={styles.visual}>
          <div className={styles.visualContainer}>
            {/* Widget 1: Floating Editor Card */}
            <div className={`${styles.widget} ${styles.widgetEditor} drifting-element`} style={{ "--delay": "0s" } as React.CSSProperties}>
              <div className={styles.widgetHeader}>
                <span className={styles.widgetDotRed} />
                <span className={styles.widgetDotYellow} />
                <span className={styles.widgetDotGreen} />
                <span className={styles.widgetTitle}>gravity_controller.py</span>
              </div>
              <div className={styles.widgetBody}>
                <pre>
                  <code>
                    <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>defy_gravity</span>():<br />
                    &nbsp;&nbsp;mass = <span className={styles.codeNumber}>9.8</span> * <span className={styles.codeVar}>gravity_scale</span><br />
                    &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> mass &lt;= <span className={styles.codeNumber}>0</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className={styles.codeString}>"Floating in Zero-G!"</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> <span className={styles.codeVar}>float_velocity</span><br />
                    &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> <span className={styles.codeString}>"Gravitational pull active"</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Widget 2: Floating Terminal Card */}
            <div className={`${styles.widget} ${styles.widgetTerminal} floating-element`} style={{ "--delay": "-2.5s" } as React.CSSProperties}>
              <div className={styles.widgetHeader}>
                <span className={styles.widgetDotRed} />
                <span className={styles.widgetDotYellow} />
                <span className={styles.widgetDotGreen} />
                <span className={styles.widgetTitle}>zsh - antigravity-runner</span>
              </div>
              <div className={styles.widgetBody}>
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>$</span> antigravity --execute refactor-all
                </div>
                <div className={styles.termSuccess}>
                  ✓ Planning phase approved.<br />
                  ✓ Applied 3 non-contiguous patches.<br />
                  ✓ All tests passed (0.42s).<br />
                  <span className={styles.termTextGlow}>[Zero-G State: Activated]</span>
                </div>
              </div>
            </div>

            {/* Widget 3: File Tree Badge */}
            <div className={`${styles.widget} ${styles.widgetBadge} drifting-element`} style={{ "--delay": "-4s" } as React.CSSProperties}>
              <div className={styles.badgeGlow} />
              <div className={styles.badgeContent}>
                <span className={styles.badgeIcon}>✦</span>
                <div>
                  <div className={styles.badgeTitle}>AI Execution Completed</div>
                  <div className={styles.badgeSub}>Task fully resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
