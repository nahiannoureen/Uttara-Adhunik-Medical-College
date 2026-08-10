"use client";

import React from "react";

const admissions = [
  {
    no: "01",
    date: "July 18, 2022",
    title: "MBBS Admission",
  },
  {
    no: "02",
    date: "July 7, 2022",
    title: "Selected Candidates under General Quota Merit List",
  },
  {
    no: "03",
    date: "July 7, 2022",
    title: "Selected Candidates under Freedom Fighter Quota Merit List",
  },
  {
    no: "04",
    date: "July 6, 2022",
    title: "Total Merit List (A–Z) for MBBS Admission",
  },
  {
    no: "05",
    date: "July 6, 2022",
    title: "Total Applications (A–Z) – Freedom Fighter Quota",
  },
  {
    no: "06",
    date: "July 6, 2022",
    title: "Total Applications – Poor & Meritorious Quota",
  },
  {
    no: "07",
    date: "August 26, 2021",
    title: "General Notice for Admission",
  },
];

export default function Result() {
  return (
    <>
      <style jsx>{`
        .result-section {
          width: 100%;
          max-width: 1600px;
          min-height: 1098.8px;
          margin: 0 auto;
          padding: 60px 80px 80px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          background: #ffffff;
        }

        /* =========================
           UPPER SECTION
        ========================= */

        .result-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 0 30px 0;
          padding: 0;
        }

        .result-header h1 {
          width: 448px;
          height: 60px;
          margin: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 0.01em;
          text-align: center;

          color: #000000;
        }

        .result-header p {
          width: 303px;
          height: 50px;
          margin: 0;
          padding: 10px;

          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 0.01em;
          text-align: center;

          color: #000000;
        }

        /* =========================
           CONTENT
        ========================= */

        .result-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 20px;
        }

        /* =========================
           RECENT HEADING
        ========================= */

        .recent-heading {
          width: 100%;
          min-height: 45px;
          margin: 0;

          display: flex;
          align-items: center;

          box-sizing: border-box;
        }

        .green-bar {
          width: 4px;
          min-width: 4px;
          height: 45px;

          background: #018837;

          margin-right: 14px;
        }

        .recent-heading h2 {
          margin: 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 45px;

          color: #444444;
        }

        /* =========================
           TABLE
        ========================= */

        .result-table {
          width: 1400px;
          max-width: 100%;
          margin: 0;

          display: flex;
          flex-direction: column;

          box-sizing: border-box;
        }

        .table-header,
        .table-row {
          width: 100%;
          box-sizing: border-box;

          display: grid;
          grid-template-columns:
            70px
            235px
            1px
            minmax(350px, 1fr)
            1px
            235px;

          align-items: center;
        }

        /* =========================
           TABLE HEADER
        ========================= */

        .table-header {
          height: 56px;
          padding: 20px;

          background: rgba(20, 168, 0, 0.1);

          border-top: 1px solid rgba(68, 68, 68, 0.5);
          border-bottom: 1px solid rgba(68, 68, 68, 0.5);

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 15px;

          color: #444444;
        }

        .table-header > div {
          display: flex;
          align-items: center;
        }

        .table-header .divider,
        .table-row .divider {
          width: 1px;
          height: 16px;

          background: #444444;

          justify-self: center;
        }

        .table-header .action-title {
          justify-content: flex-end;
        }

        /* =========================
           TABLE ROW
        ========================= */

        .table-row {
          min-height: 80px;
          padding: 20px;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 15px;

          color: #444444;
        }

        .table-row > div {
          display: flex;
          align-items: center;
        }

        /* =========================
           ACTION BUTTONS
        ========================= */

        .actions {
          display: flex !important;
          justify-content: flex-end;
          align-items: center;

          gap: 10px;
        }

        .action-button {
          width: 40px;
          height: 40px;
          padding: 0;

          border: none;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(1, 136, 55, 0.1);

          color: #018837;

          cursor: pointer;

          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 600;

          transition: background 0.2s ease;
        }

        .action-button:hover {
          background: rgba(1, 136, 55, 0.2);
        }

        /* =========================
           NOTE
        ========================= */

        .note {
          width: 100%;
          max-width: 1428px;
          min-height: 48px;

          box-sizing: border-box;

          display: flex;
          align-items: center;

          padding: 10px 20px;
          gap: 10px;

          margin: 0;
        }

        .note .green-bar {
          width: 4px;
          min-width: 4px;
          height: 48px;

          margin: 0;

          background: #018837;

          align-self: stretch;
        }

        .note p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 27px;

          color: #000000;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1200px) {
          .result-section {
            padding: 50px 30px;
          }

          .table-header,
          .table-row {
            grid-template-columns:
              60px
              180px
              1px
              minmax(250px, 1fr)
              1px
              180px;
          }
        }

        @media (max-width: 768px) {
          .result-section {
            padding: 40px 20px;
          }

          .result-header {
            margin-bottom: 25px;
          }

          .result-header h1 {
            width: 100%;
            height: auto;
            font-size: 36px;
            line-height: 44px;
          }

          .result-header p {
            width: auto;
          }

          .recent-heading h2 {
            font-size: 26px;
            line-height: 34px;
          }

          .result-table {
            overflow-x: auto;
          }

          .table-header,
          .table-row {
            min-width: 1100px;
          }

          .note {
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="result-section">
        {/* UPPER SECTION */}
        <div className="result-header">
          <h1>Admission Results</h1>

          <p>MBBS Admission (Session: 2021–2022)</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="result-content">
          {/* RECENT */}
          <div className="recent-heading">
            <span className="green-bar" />

            <h2>Recent Admission Notices &amp; Required Documents</h2>
          </div>

          {/* TABLE */}
          <div className="result-table">
            {/* TABLE HEADER */}
            <div className="table-header">
              <div>No.</div>

              <div>Date</div>

              <div className="divider" />

              <div>Title</div>

              <div className="divider" />

              <div className="action-title">Action</div>
            </div>

            {/* TABLE ROWS */}
            {admissions.map((item) => (
              <div className="table-row" key={item.no}>
                <div>{item.no}</div>

                <div>{item.date}</div>

                <div className="divider" />

                <div>{item.title}</div>

                <div className="divider" />

                <div className="actions">
                  <button
                    type="button"
                    className="action-button"
                    aria-label={`Download ${item.title}`}
                  >
                    ↓
                  </button>

                  <button
                    type="button"
                    className="action-button"
                    aria-label={`Share ${item.title}`}
                  >
                    ↗
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div className="note">
            <span className="green-bar" />

            <p>
              Note: Applicants are advised to fill out the appropriate form as
              per their eligibility criteria and submit it along with required
              documents to the college office within the notified deadlines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
