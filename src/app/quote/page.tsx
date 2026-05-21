"use client";

import styles from "./page.module.css";

const quoteData = {
  quoteNumber: "2026-001",
  issueDate: "2026년 05월 21일",
  validUntil: "2026년 06월 20일",
  agency: {
    name: "블루스튜디오",
    ceo: "홍길동",
    bizNumber: "123-45-67890",
    address: "서울특별시 강남구 테헤란로 123",
    email: "hello@bluestudio.dev",
    phone: "010-1234-5678",
  },
  client: {
    company: "주식회사 클라이언트",
    contact: "김담당",
    email: "client@company.com",
    phone: "02-1234-5678",
  },
  items: [
    {
      id: 1,
      name: "웹 서비스 기획 및 IA 설계",
      spec: "와이어프레임, 사용자 플로우 정의",
      qty: 1,
      unit: "식",
      unitPrice: 1500000,
    },
    {
      id: 2,
      name: "UI/UX 디자인",
      spec: "반응형 디자인, 디자인 시스템 구축",
      qty: 1,
      unit: "식",
      unitPrice: 2500000,
    },
    {
      id: 3,
      name: "프론트엔드 개발",
      spec: "Next.js, TypeScript, 반응형 웹",
      qty: 1,
      unit: "식",
      unitPrice: 3500000,
    },
    {
      id: 4,
      name: "백엔드 API 개발",
      spec: "Node.js, REST API, DB 설계",
      qty: 1,
      unit: "식",
      unitPrice: 3000000,
    },
    {
      id: 5,
      name: "배포 및 인프라 구성",
      spec: "AWS/Vercel 배포, CI/CD 파이프라인",
      qty: 1,
      unit: "식",
      unitPrice: 800000,
    },
    {
      id: 6,
      name: "유지보수 (3개월)",
      spec: "버그 수정, 소규모 기능 추가",
      qty: 3,
      unit: "개월",
      unitPrice: 300000,
    },
  ],
  notes: [
    "견적 유효기간은 발행일로부터 30일입니다.",
    "계약금 50%, 중도금 30%, 잔금 20% 순으로 납부합니다.",
    "추가 기능 요청 시 별도 견적이 발생할 수 있습니다.",
    "부가세(VAT) 10%가 별도 적용됩니다.",
  ],
};

function formatKRW(amount: number) {
  return amount.toLocaleString("ko-KR") + "원";
}

export default function QuotePage() {
  const subtotal = quoteData.items.reduce(
    (sum, item) => sum + item.unitPrice * item.qty,
    0
  );
  const vat = Math.round(subtotal * 0.1);
  const total = subtotal + vat;

  const handlePrint = () => window.print();

  return (
    <div className={styles.wrapper}>
      <div className={styles.printActions}>
        <button onClick={handlePrint} className={styles.printBtn}>
          🖨 인쇄 / PDF 저장
        </button>
      </div>

      <div className={styles.document}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>◈</span>
              <span className={styles.logoText}>{quoteData.agency.name}</span>
            </div>
            <p className={styles.agencyTagline}>1인 풀스택 개발 에이전시</p>
          </div>
          <div className={styles.headerRight}>
            <h1 className={styles.title}>견 적 서</h1>
            <div className={styles.metaGrid}>
              <span className={styles.metaLabel}>견적번호</span>
              <span className={styles.metaValue}>{quoteData.quoteNumber}</span>
              <span className={styles.metaLabel}>발행일</span>
              <span className={styles.metaValue}>{quoteData.issueDate}</span>
              <span className={styles.metaLabel}>유효기간</span>
              <span className={styles.metaValue}>{quoteData.validUntil}</span>
            </div>
          </div>
        </div>

        <div className={styles.dividerAccent} />

        {/* Parties */}
        <div className={styles.parties}>
          <div className={styles.partyCard}>
            <div className={styles.partyBadge}>공급자</div>
            <table className={styles.partyTable}>
              <tbody>
                <tr>
                  <th>상호</th>
                  <td>{quoteData.agency.name}</td>
                </tr>
                <tr>
                  <th>대표자</th>
                  <td>{quoteData.agency.ceo}</td>
                </tr>
                <tr>
                  <th>사업자등록번호</th>
                  <td>{quoteData.agency.bizNumber}</td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>{quoteData.agency.address}</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>{quoteData.agency.email}</td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>{quoteData.agency.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.partyCard}>
            <div className={styles.partyBadge + " " + styles.clientBadge}>
              공급받는자
            </div>
            <table className={styles.partyTable}>
              <tbody>
                <tr>
                  <th>회사명</th>
                  <td>{quoteData.client.company}</td>
                </tr>
                <tr>
                  <th>담당자</th>
                  <td>{quoteData.client.contact}</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>{quoteData.client.email}</td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>{quoteData.client.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Summary Banner */}
        <div className={styles.totalBanner}>
          <span className={styles.totalBannerLabel}>견적 합계 금액 (VAT 포함)</span>
          <span className={styles.totalBannerAmount}>{formatKRW(total)}</span>
        </div>

        {/* Items Table */}
        <div className={styles.tableSection}>
          <table className={styles.itemsTable}>
            <thead>
              <tr>
                <th className={styles.colNo}>No.</th>
                <th className={styles.colName}>품명</th>
                <th className={styles.colSpec}>규격 / 상세</th>
                <th className={styles.colQty}>수량</th>
                <th className={styles.colUnit}>단위</th>
                <th className={styles.colPrice}>단가</th>
                <th className={styles.colAmount}>공급가액</th>
              </tr>
            </thead>
            <tbody>
              {quoteData.items.map((item) => (
                <tr key={item.id}>
                  <td className={styles.colNo}>{item.id}</td>
                  <td className={styles.colName}>{item.name}</td>
                  <td className={styles.colSpec}>{item.spec}</td>
                  <td className={styles.colQty}>{item.qty}</td>
                  <td className={styles.colUnit}>{item.unit}</td>
                  <td className={styles.colPrice}>{formatKRW(item.unitPrice)}</td>
                  <td className={styles.colAmount}>
                    {formatKRW(item.unitPrice * item.qty)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <span>공급가액 합계</span>
              <span>{formatKRW(subtotal)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>부가세 (VAT 10%)</span>
              <span>{formatKRW(vat)}</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryRowTotal}>
              <span>최종 합계</span>
              <span>{formatKRW(total)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className={styles.notesSection}>
          <h3 className={styles.notesTitle}>안내 사항</h3>
          <ul className={styles.notesList}>
            {quoteData.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>
            위와 같이 견적을 제출합니다. 문의사항은 아래로 연락 부탁드립니다.
          </p>
          <div className={styles.footerContact}>
            <span>{quoteData.agency.email}</span>
            <span className={styles.footerDot}>·</span>
            <span>{quoteData.agency.phone}</span>
          </div>
          <div className={styles.footerBrand}>{quoteData.agency.name}</div>
        </div>
      </div>
    </div>
  );
}
