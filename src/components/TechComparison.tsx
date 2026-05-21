"use client";

import React from "react";
import styles from "./TechComparison.module.css";

export default function TechComparison() {
  const tableData = [
    {
      feature: "저장소 컨텍스트 이해",
      traditional: "현재 열린 파일의 상위 500라인에 한정된 얕은 지식",
      antigravity: "저장소 단위 자동 생성 지식 정보(Knowledge Items) 학습",
      accent: false
    },
    {
      feature: "코드 편집 및 패치",
      traditional: "단일 위치의 스니펫 자동완성 혹은 단순 추가 지점 제안",
      antigravity: "파일 내 여러 비연속적인 라인(multi-chunk)을 한번에 정교하게 수정",
      accent: true
    },
    {
      feature: "쉘 및 명령어 실행",
      traditional: "불가능 (사용자가 직접 터미널에 복사 및 붙여넣어 실행해야 함)",
      antigravity: "자체 샌드박스 쉘을 제안하고 사용자의 일괄 승인 하에 직접 실행",
      accent: false
    },
    {
      feature: "빌드 오류 자가 해결",
      traditional: "린트/컴파일 에러 발생 시 수동 검색 및 디버깅",
      antigravity: "에러 로그를 실시간 연구하여 스스로 해결책 마련 및 패치 재적용",
      accent: true
    },
    {
      feature: "동적 장기 협업",
      traditional: "일회성 프롬프트-답변 구조",
      antigravity: "/goal, /schedule, /grill-me 등 예약/기획형 정밀 협업",
      accent: false
    }
  ];

  return (
    <section id="comparison" className={styles.comparison}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Science of Zero-G</h2>
          <h1 className={styles.title}>
            무거운 중력을 덜어낸 <br />
            <span className="text-gradient-gold-pink">압도적인 생산성 차이</span>
          </h1>
          <p className={styles.lead}>
            과거의 개발 방식과 안티그래비티가 제공하는 미래의 에이전틱 작업 환경을 직접 대조해보세요.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>비교 기준 (Features)</th>
                <th>전통적인 코딩 어시스턴트 (Heavy)</th>
                <th className={styles.antigravityHeader}>안티그래비티 에이전트 (Zero-G)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className={row.accent ? styles.rowAccent : ""}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td className={styles.traditionalCell}>{row.traditional}</td>
                  <td className={styles.antigravityCell}>
                    <span className={styles.checkIcon}>✦</span> {row.antigravity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
