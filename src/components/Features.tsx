"use client";

import React from "react";
import styles from "./Features.module.css";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
  colorClass: string;
}

function FeatureCard({ icon, title, desc, colorClass }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardGlow} />
      <div className={`${styles.iconContainer} ${styles[colorClass]}`}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
}

export default function Features() {
  const capabilities = [
    {
      icon: "✦",
      title: "에이전트 자율 Workspace",
      desc: "단순 코드 제안을 넘어, 샌드박스 터미널에서 쉘 명령어를 직접 제안 및 실행하고 다중 비연속적 코드 청크를 한번에 정밀 편집합니다.",
      color: "purple"
    },
    {
      icon: "⚛",
      title: "로컬 지식 엔진 (Knowledge Items)",
      desc: "저장소 고유의 관례, 빌드 옵션, 특이 패턴을 담은 지식 파일(KI)을 자동 인지하여 컨텍스트 탐색 오버헤드를 극적으로 생략합니다.",
      color: "cyan"
    },
    {
      icon: "⚡",
      title: "동적 협업 슬래시(/) 커맨드",
      desc: "/goal(끝장 디버깅), /schedule(태스크 스케줄링), /grill-me(심층 인터뷰 기획) 등 에이전트와 완벽하게 조율된 상호작용을 지원합니다.",
      color: "blue"
    },
    {
      icon: "🛡",
      title: "자가 치유 빌드 루프 (Self-Healing)",
      desc: "코드 변경 시 자동으로 컴파일과 린트 에러를 추적하고, 결함 발견 시 스스로 연구하여 완벽히 교정된 패치를 재적용합니다.",
      color: "green"
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Zero Gravity capabilities</h2>
          <h1 className={styles.title}>
            코딩의 중력을 극복하는 <br />
            <span className="text-gradient-cyan-blue">안티그래비티 핵심 역량</span>
          </h1>
          <p className={styles.lead}>
            복잡성이라는 이름의 지구 중력에서 벗어나십시오. 안티그래비티가 선사하는 4가지 압도적 자율 에이전트 기능을 만나보세요.
          </p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <FeatureCard
              key={i}
              icon={cap.icon}
              title={cap.title}
              desc={cap.desc}
              colorClass={cap.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
