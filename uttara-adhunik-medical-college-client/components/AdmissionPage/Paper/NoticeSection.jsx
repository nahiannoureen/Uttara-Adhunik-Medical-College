import React from "react";

const GREEN = "#018837";

const notices = [
  {
    no: "01",
    date: "April 9, 2025",
    title: "Necessary Documents for MBBS Admission (Session: 2024–2025)",
  },
  {
    no: "02",
    date: "April 5, 2025",
    title:
      "Admission Notice in MBBS Course (Session: 2024–2025) for Private Medical Colleges",
  },
  {
    no: "03",
    date: "Jan 25, 2025",
    title:
      "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "04",
    date: "Feb 19, 2024",
    title: "Admission Notice in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "05",
    date: "Feb 16, 2024",
    title: "Notice of MBBS Admission (Session: 2022–2023)",
  },
  {
    no: "06",
    date: "June 30, 2023",
    title:
      "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "07",
    date: "June 25, 2023",
    title: "Govt. Circular for MBBS Admission 2023 in Private Medical Colleges",
  },
  {
    no: "08",
    date: "June 6, 2023",
    title: "Necessary Documents to Submit Application",
  },
  {
    no: "09",
    date: "June 5, 2021",
    title: "Admission Circular (Govt. Notice)",
  },
];

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3V15"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20H19"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="2.5" stroke={GREEN} strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.5" stroke={GREEN} strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.5" stroke={GREEN} strokeWidth="1.8" />
      <path
        d="M8.2 10.8L15.8 6.2"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.2 13.2L15.8 17.8"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ActionButton({ children, label }) {
  return (
    <button type="button" aria-label={label} className="notice-action-button">
      {children}
    </button>
  );
}

function NoticeRow({ no, date, title }) {
  return (
    <div className="notice-row">
      {/* Number */}
      <div className="notice-number">{no}</div>

      {/* Date */}
      <div className="notice-date">{date}</div>

      {/* Separator */}
      <div className="notice-separator" />

      {/* Title */}
      <div className="notice-title">{title}</div>

      {/* Separator */}
      <div className="notice-separator" />

      {/* Actions */}
      <div className="notice-actions">
        <ActionButton label={`Download ${title}`}>
          <DownloadIcon />
        </ActionButton>

        <ActionButton label={`Share ${title}`}>
          <ShareIcon />
        </ActionButton>
      </div>
    </div>
  );
}

export default function NoticeSection() {
  return (
    <section className="notice-section">
      <div className="notice-container">
        {/* Header */}
        <div className="notice-header">
          <h2>Admission Papers &amp; Notices</h2>

          <p>MBBS Admission – Session 2024–2025</p>
        </div>

        {/* Notice Table */}
        <div className="notice-table">
          {/* Table Header */}
          <div className="notice-table-header">
            <div>No.</div>
            <div>Date</div>
            <div />
            <div>Title</div>
            <div />
            <div>Action</div>
          </div>

          {/* Notice Rows */}
          {notices.map((notice) => (
            <NoticeRow key={notice.no} {...notice} />
          ))}
        </div>

        {/* Note */}
        <div className="notice-note">
          <p>
            Note: All applicants are advised to check the latest official
            notices on the Directorate General of Medical Education (DGME)
            website for up-to-date admission instructions and required
            documents.
          </p>
        </div>
      </div>

      <style>{`
        .notice-section {
          width: 100%;
          min-height: 1258.8px;
          box-sizing: border-box;
          padding: 80px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
        }

        .notice-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        /* ================================
           HEADER
        ================================= */

        .notice-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .notice-header h2 {
          margin: 0;
          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 0.01em;
          text-align: center;
          color: #000000;
        }

        .notice-header p {
          margin: 10px 0 0;
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 0.01em;
          text-align: center;
          color: #000000;
        }

        /* ================================
           TABLE
        ================================= */

        .notice-table {
          width: 100%;
          border: 1px solid rgba(68, 68, 68, 0.5);
          box-sizing: border-box;
          overflow: hidden;
        }

        .notice-table-header,
        .notice-row {
          display: grid;
          grid-template-columns:
            70px
            235px
            1px
            minmax(300px, 1fr)
            1px
            90px;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* ================================
           TABLE HEADER
        ================================= */

        .notice-table-header {
          height: 56px;
          padding: 20px;
          background: rgba(20, 168, 0, 0.1);
          border-top: 1px solid rgba(68, 68, 68, 0.5);
          border-bottom: 1px solid rgba(68, 68, 68, 0.5);
          color: #444444;
          font-family: "Bitter", serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
        }

        .notice-table-header > div:nth-child(4) {
          padding-left: 20px;
        }

        .notice-table-header > div:nth-child(6) {
          padding-left: 20px;
          text-align: right;
        }

        /* ================================
           ROW
        ================================= */

        .notice-row {
          min-height: 80px;
          padding: 20px;
          border-bottom: 1px solid rgba(68, 68, 68, 0.25);
          background: #ffffff;
        }

        .notice-row:last-child {
          border-bottom: none;
        }

        .notice-number,
        .notice-date,
        .notice-title {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          color: #444444;
        }

        .notice-date {
          padding-right: 20px;
        }

        .notice-title {
          padding-left: 20px;
          padding-right: 20px;
        }

        .notice-separator {
          width: 1px;
          height: 24px;
          background: rgba(68, 68, 68, 0.5);
        }

        /* ================================
           ACTIONS
        ================================= */

        .notice-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          padding-left: 20px;
        }

        .notice-action-button {
          width: 40px;
          height: 40px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(1, 136, 55, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        }

        .notice-action-button:hover {
          background: rgba(1, 136, 55, 0.2);
          transform: translateY(-1px);
        }

        .notice-action-button:active {
          transform: translateY(0);
        }

        /* ================================
           NOTE
        ================================= */

        .notice-note {
          width: 100%;
          min-height: 48px;
          padding: 10px 20px;
          box-sizing: border-box;
          border-left: 4px solid ${GREEN};
          display: flex;
          align-items: center;
        }

        .notice-note p {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 27px;
          color: #000000;
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 1200px) {
          .notice-section {
            padding: 60px 40px;
          }

          .notice-table-header,
          .notice-row {
            grid-template-columns:
              60px
              180px
              1px
              minmax(250px, 1fr)
              1px
              100px;
          }

          .notice-header h2 {
            font-size: 44px;
            line-height: 52px;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 768px) {
          .notice-section {
            min-height: auto;
            padding: 50px 20px;
          }

          .notice-container {
            gap: 35px;
          }

          .notice-header h2 {
            font-size: 34px;
            line-height: 42px;
          }

          .notice-header p {
            font-size: 14px;
            line-height: 24px;
          }

          .notice-table {
            overflow-x: auto;
          }

          .notice-table-header,
          .notice-row {
            min-width: 760px;
            grid-template-columns:
              60px
              160px
              1px
              minmax(300px, 1fr)
              1px
              100px;
          }

          .notice-row {
            min-height: 75px;
          }

          .notice-note p {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>
    </section>
  );
}
