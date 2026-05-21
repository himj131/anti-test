"use client";

import React from "react";
import styles from "./GravityControl.module.css";

interface GravityControlProps {
  gravity: number;
  setGravity: (val: number) => void;
}

export default function GravityControl({ gravity, setGravity }: GravityControlProps) {
  // Description based on gravity level
  const getGravityText = (val: number) => {
    if (val >= 0.9) return "지상 상태 (Earth 1G) - 복잡성과 무거운 디버깅";
    if (val >= 0.5) return "대기권 탈출 (Orbit 0.5G) - 가벼워지는 엔지니어링";
    if (val >= 0.15) return "달 표면 (Lunar 0.16G) - 적은 마찰력의 컴파일";
    return "완벽한 무중력 (Zero-G 0.0G) - 안티그래비티 활성화!";
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGravity(parseFloat(e.target.value));
  };

  // Astronaut translation depending on gravity.
  // When gravity is 1 (normal), astronaut is low: translateY(80px)
  // When gravity is 0 (zero-g), astronaut floats high: translateY(0px)
  const astronautTranslate = 80 * gravity;
  const astronautFloatAmplitude = 30 * (1 - gravity) + 4; // floats higher in Zero-G
  const astronautFloatSpeed = 3 + 6 * (1 - gravity); // floats slower in Zero-G

  return (
    <section id="gravity-center" className={styles.gravityCenter}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.controlSide}>
            <div className={styles.tag}>ZERO-G EXPERIMENTAL LAB</div>
            <h1 className={styles.title}>실시간 중력 조절 센터</h1>
            <p className={styles.desc}>
              슬라이더를 조정하여 웹페이지의 중력 수준을 제어해보세요.<br />
              <strong>0.0G (무중력)</strong>에 가까워질수록 상단 히어로 섹션의 위젯들과 
              우측 우주비행사가 더 높이, 그리고 더 천천히 떠돌아다닙니다.
            </p>

            <div className={styles.sliderContainer}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>GRAVITY SCALE</span>
                <span className={styles.sliderValue}>{gravity.toFixed(2)} G</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={gravity}
                onChange={handleSliderChange}
                className={styles.slider}
              />
              <div className={styles.sliderTicks}>
                <span onClick={() => setGravity(0)} className={styles.tick}>0.0G</span>
                <span onClick={() => setGravity(0.16)} className={styles.tick}>0.16G</span>
                <span onClick={() => setGravity(0.5)} className={styles.tick}>0.5G</span>
                <span onClick={() => setGravity(1)} className={styles.tick}>1.0G</span>
              </div>
            </div>

            <div className={`${styles.statusCard} ${gravity === 0 ? styles.statusZeroG : ""}`}>
              <div className={styles.statusDot} />
              <div className={styles.statusText}>
                <strong>현재 상태: </strong> {getGravityText(gravity)}
              </div>
            </div>
          </div>

          {/* Interactive Gravity Visualization */}
          <div className={styles.visualSide}>
            <div className={styles.chamber}>
              <div className={styles.chamberGrid} />
              <div className={styles.chamberTitle}>ANTI-GRAVITY CHAMBER</div>
              
              {/* Astronaut SVG */}
              <div 
                className={styles.astronautContainer}
                style={{
                  transform: `translateY(${astronautTranslate}px)`,
                  animation: `${styles.chamberBob} ${astronautFloatSpeed}s ease-in-out infinite`,
                  "--bob-amp": `${astronautFloatAmplitude}px`
                } as React.CSSProperties}
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.astronautSvg}
                >
                  {/* Outer Space Suit (Silver White) */}
                  <circle cx="32" cy="22" r="12" fill="#E2E8F0" />
                  {/* Helmet Visor (Blue glowing screen) */}
                  <rect x="25" y="16" width="14" height="10" rx="3" fill="#06B6D4" />
                  <path d="M27 18H37V22H27V18Z" fill="#22D3EE" opacity="0.6" />
                  
                  {/* Space Backpack */}
                  <rect x="16" y="24" width="32" height="24" rx="4" fill="#CBD5E1" />
                  
                  {/* Torso */}
                  <rect x="22" y="28" width="20" height="22" rx="6" fill="#F8FAFC" />
                  
                  {/* Arms */}
                  <rect x="14" y="30" width="6" height="14" rx="3" fill="#E2E8F0" transform="rotate(-15 14 30)" />
                  <rect x="44" y="30" width="6" height="14" rx="3" fill="#E2E8F0" transform="rotate(15 44 30)" />
                  
                  {/* Legs */}
                  <rect x="24" y="48" width="6" height="12" rx="3" fill="#E2E8F0" />
                  <rect x="34" y="48" width="6" height="12" rx="3" fill="#E2E8F0" />
                  
                  {/* Detailing lines */}
                  <line x1="22" y1="34" x2="42" y2="34" stroke="#94A3B8" strokeWidth="2" />
                  <circle cx="32" cy="40" r="3" fill="#6366F1" />
                </svg>
                {/* Floating particles */}
                <div className={styles.particle} style={{ top: "-10px", left: "-20px", animationDelay: "0.2s" }} />
                <div className={styles.particle} style={{ top: "30px", right: "-30px", animationDelay: "0.8s" }} />
                <div className={styles.particle} style={{ bottom: "-20px", left: "20px", animationDelay: "1.4s" }} />
              </div>
              
              {/* Force field rings */}
              <div 
                className={styles.forceField}
                style={{
                  opacity: 1 - gravity,
                  transform: `scale(${1.2 - gravity * 0.2})`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
