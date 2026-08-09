import React from "react";

const LibrarySection = () => {
  return (
    <section className="library-section">
      {/* =========================
          Opening Information
      ========================= */}
      <div className="library-opening">
        <div className="opening-item">
          <span className="clock-icon">◷</span>
          <span>Open: 8:00 AM – 9:00 PM</span>
        </div>

        <div className="opening-divider" />

        <div className="opening-item">
          <span className="calendar-icon">▣</span>
          <span>Days: All working days</span>
        </div>
      </div>

      {/* =========================
          Library Content
      ========================= */}
      <div className="library-content">
        {/* Heading + Description */}
        <div className="library-intro">
          <div className="library-title">
            <div className="library-icon">📚</div>

            <h2>
              About the
              <br />
              Library
            </h2>
          </div>

          <div className="library-description">
            A Modern Hub for Academic Excellence The College Library is a fully
            air-conditioned, modern facility located on the 12th floor of the
            academic building, designed to support students and faculty with
            rich academic resources and a comfortable study environment.
          </div>
        </div>

        {/* Library Image */}
        <div className="library-image-wrapper">
          <img
            src="/images/f187def8-5bd0-4b17-a1ac-a234d92577a9.jpg"
            alt="College Library"
            className="library-image"
          />
        </div>

        {/* Statistics */}
        <div className="library-statistics">
          <div className="library-stat">
            <div className="stat-number">3,371 +</div>
            <div className="stat-label">Books</div>
          </div>

          <div className="stat-divider" />

          <div className="library-stat">
            <div className="stat-number">1,187 + 367</div>
            <div className="stat-label">Journals</div>
          </div>
        </div>

        {/* Digital Catalog */}
        <div className="digital-catalog">
          <strong>Digital Catalog:</strong> All resources are indexed and
          catalogued in a computerized database for easy access.
        </div>
      </div>

      {/* =========================
          Styles
      ========================= */}
      <style>{`
        /* =========================
           Main Section
        ========================= */

        .library-section {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          min-height: 1220px;

          padding: 80px;
          gap: 50px;

          box-sizing: border-box;

          background: #e6f4eb;
        }

        /* =========================
           Opening Information
        ========================= */

        .library-opening {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          width: 681px;
          height: 50px;

          padding: 10px 50px;
          gap: 50px;

          box-sizing: border-box;

          background: rgba(1, 136, 55, 0.1);
        }

        .opening-item {
          display: flex;
          flex-direction: row;
          align-items: center;

          gap: 10px;

          height: 30px;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 30px;

          letter-spacing: 0.01em;

          color: #000000;

          white-space: nowrap;
        }

        .clock-icon,
        .calendar-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 20px;
          height: 20px;

          font-size: 22px;

          color: #018837;
        }

        .opening-divider {
          width: 1px;
          height: 19px;

          background: #000000;

          flex-shrink: 0;
        }

        /* =========================
           Content
        ========================= */

        .library-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
          max-width: 1440px;

          gap: 50px;
        }

        /* =========================
           Intro
        ========================= */

        .library-intro {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;

          width: 100%;

          gap: 100px;
        }

        .library-title {
          display: flex;
          flex-direction: row;
          align-items: center;

          gap: 20px;

          width: 382px;
          min-width: 382px;

          height: 120px;
        }

        .library-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 120px;
          height: 120px;

          font-size: 70px;

          color: #018837;
        }

        .library-title h2 {
          margin: 0;

          width: 242px;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 400;

          font-size: 50px;
          line-height: 60px;

          letter-spacing: 0.01em;

          color: #000000;
        }

        .library-description {
          display: flex;
          align-items: center;

          width: 683px;
          min-height: 141px;

          padding: 10px;

          box-sizing: border-box;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 20px;
          line-height: 30px;

          letter-spacing: 0.01em;

          text-align: justify;

          color: #444444;
        }

        /* =========================
           Image
        ========================= */

        .library-image-wrapper {
          width: 100%;

          padding: 10px;

          box-sizing: border-box;
        }

        .library-image {
          display: block;

          width: 100%;
          height: 532px;

          object-fit: cover;

          border-radius: 0;
        }

        /* =========================
           Statistics
        ========================= */

        .library-statistics {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          width: 100%;

          gap: 40px;

          min-height: 105px;
        }

        .library-stat {
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .library-stat:first-child {
          width: 142px;
        }

        .library-stat:last-child {
          width: 178px;
        }

        .stat-number {
          display: flex;
          align-items: center;
          justify-content: center;

          min-height: 83px;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;

          font-size: 45px;
          line-height: 54px;

          letter-spacing: 0.01em;

          color: #018837;

          text-align: center;
        }

        .stat-label {
          display: flex;
          align-items: center;
          justify-content: center;

          min-height: 22px;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 18px;
          line-height: 22px;

          letter-spacing: 0.01em;

          color: #000000;

          text-align: center;
        }

        .stat-divider {
          width: 1px;
          height: 62px;

          background: #000000;
        }

        /* =========================
           Digital Catalog
        ========================= */

        .digital-catalog {
          display: flex;
          align-items: center;

          width: 100%;

          min-height: 42px;

          padding: 10px;

          box-sizing: border-box;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 18px;
          line-height: 22px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        /* =========================
           Tablet
        ========================= */

        @media (max-width: 1100px) {
          .library-section {
            padding: 60px 40px;
          }

          .library-intro {
            gap: 40px;
          }

          .library-title {
            min-width: 330px;
          }

          .library-description {
            width: auto;
            flex: 1;
          }
        }

        /* =========================
           Mobile
        ========================= */

        @media (max-width: 700px) {
          .library-section {
            min-height: auto;

            padding: 40px 20px;

            gap: 35px;
          }

          .library-opening {
            width: 100%;
            height: auto;

            flex-direction: column;

            padding: 15px;

            gap: 10px;
          }

          .opening-item {
            font-size: 15px;
            line-height: 24px;
          }

          .opening-divider {
            width: 80%;
            height: 1px;
          }

          .library-content {
            gap: 30px;
          }

          .library-intro {
            flex-direction: column;

            gap: 25px;
          }

          .library-title {
            width: 100%;
            min-width: 0;

            height: auto;

            justify-content: center;
          }

          .library-icon {
            width: 80px;
            height: 80px;

            font-size: 50px;
          }

          .library-title h2 {
            width: auto;

            font-size: 40px;
            line-height: 48px;
          }

          .library-description {
            width: 100%;
            min-height: auto;

            padding: 0;

            font-size: 16px;
            line-height: 26px;

            text-align: left;
          }

          .library-image-wrapper {
            padding: 0;
          }

          .library-image {
            width: 100%;
            height: 300px;
          }

          .library-statistics {
            gap: 20px;
          }

          .stat-number {
            font-size: 32px;
            line-height: 40px;
          }

          .stat-label {
            font-size: 15px;
          }

          .stat-divider {
            height: 50px;
          }

          .digital-catalog {
            padding: 0;

            font-size: 15px;
            line-height: 24px;
          }
        }

        /* =========================
           Small Mobile
        ========================= */

        @media (max-width: 450px) {
          .library-section {
            padding: 30px 15px;
          }

          .library-title {
            gap: 10px;
          }

          .library-icon {
            width: 60px;
            height: 60px;

            font-size: 40px;
          }

          .library-title h2 {
            font-size: 32px;
            line-height: 40px;
          }

          .library-image {
            height: 220px;
          }

          .library-statistics {
            gap: 12px;
          }

          .library-stat:first-child,
          .library-stat:last-child {
            width: auto;
            flex: 1;
          }

          .stat-number {
            font-size: 25px;
            line-height: 32px;
          }

          .stat-label {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default LibrarySection;
