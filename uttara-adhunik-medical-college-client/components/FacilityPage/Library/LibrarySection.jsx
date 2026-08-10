// import React from "react";

// const LibrarySection = () => {
//   return (
//     <section className="library-section">
//       {/* =========================
//           Opening Information
//       ========================= */}
//       <div className="library-opening">
//         <div className="opening-item">
//           <img src="/time.png" alt="Opening time" className="opening-icon" />
//           <span>Open: 8:00 AM – 9:00 PM</span>
//         </div>

//         <div className="opening-divider" />

//         <div className="opening-item">
//           <img
//             src="/working-days.png"
//             alt="Working days"
//             className="opening-icon"
//           />
//           <span>Days: All working days</span>
//         </div>
//       </div>

//       {/* =========================
//           Library Content
//       ========================= */}
//       <div className="library-content">
//         {/* =========================
//             Heading + Description
//         ========================= */}
//         <div className="library-intro">
//           {/* LEFT: Icon + Heading */}
//           <div className="library-title">
//             <img src="/fil.png" alt="Library" className="library-icon" />

//             <div className="library-heading">
//               <div className="about-text">About the</div>
//               <div className="library-text">Library</div>
//             </div>
//           </div>

//           {/* RIGHT: Description */}
//           <div className="library-description">
//             A Modern Hub for Academic Excellence The College Library is a fully
//             air-conditioned, modern facility located on the 12th floor of the
//             academic building, designed to support students and faculty with
//             rich academic resources and a comfortable study environment.
//           </div>
//         </div>

//         {/* =========================
//             Library Image
//         ========================= */}
//         <div className="library-image-wrapper">
//           <img
//             src="/images/f187def8-5bd0-4b17-a1ac-a234d92577a9.jpg"
//             alt="College Library"
//             className="library-image"
//           />
//         </div>

//         {/* =========================
//             Statistics
//         ========================= */}
//         <div className="library-statistics">
//           {/* BOOKS */}
//           <div className="library-stat books-stat">
//             <div className="stat-number">3,371+</div>

//             <div className="stat-subtitle">latest editions</div>

//             <div className="stat-label">Books</div>
//           </div>

//           {/* DIVIDER */}
//           <div className="stat-divider" />

//           {/* JOURNALS */}
//           <div className="library-stat journals-stat">
//             <div className="stat-number">1,187+</div>

//             <div className="stat-subtitle">367 Foreign journals</div>

//             <div className="stat-label">Journals</div>
//           </div>
//         </div>

//         {/* =========================
//             Digital Catalog
//         ========================= */}
//         <div className="digital-catalog">
//           <strong>Digital Catalog:</strong>
//           <span>
//             All resources are indexed and catalogued in a computerized database
//             for easy access.
//           </span>
//         </div>
//       </div>

//       {/* =========================
//           Styles
//       ========================= */}
//       <style>{`
//         /* =========================
//            Main Section
//         ========================= */

//         .library-section {
//           display: flex;
//           flex-direction: column;
//           align-items: center;

//           width: 100%;
//           min-height: 1220px;

//           padding: 80px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: #e6f4eb;
//         }

//         /* =========================
//            Opening Information
//         ========================= */

//         .library-opening {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;

//           width: 681px;
//           height: 50px;

//           padding: 10px 50px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: rgba(1, 136, 55, 0.1);
//         }

//         .opening-item {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 10px;

//           height: 30px;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           white-space: nowrap;
//         }

//         .opening-icon {
//           display: block;

//           width: 20px;
//           height: 20px;

//           flex-shrink: 0;

//           object-fit: contain;
//         }

//         .opening-divider {
//           width: 1px;
//           height: 19px;

//           background: #000000;

//           flex-shrink: 0;
//         }

//         /* =========================
//            Content
//         ========================= */

//         .library-content {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;

//           width: 100%;
//           max-width: 1440px;

//           gap: 50px;
//         }

//         /* =========================
//            Intro
//         ========================= */

//         .library-intro {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           align-items: flex-start;

//           width: 100%;

//           gap: 100px;
//         }

//         /* =========================
//            Title
//         ========================= */

//         .library-title {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 20px;

//           width: 382px;
//           min-width: 382px;

//           height: 120px;
//         }

//         .library-icon {
//           display: block;

//           width: 120px;
//           height: 120px;

//           flex-shrink: 0;

//           object-fit: contain;
//         }

//         /* =========================
//            About the / Library
//         ========================= */

//         .library-heading {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;

//           width: 242px;
//           height: 120px;

//           font-family: "Bitter", serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 50px;
//           line-height: 60px;

//           letter-spacing: 0.01em;
//         }

//         .about-text {
//           color: #000000;
//           white-space: nowrap;
//         }

//         .library-text {
//           color: #018837;
//           white-space: nowrap;
//         }

//         /* =========================
//            Description
//         ========================= */

//         .library-description {
//           display: flex;
//           align-items: center;

//           width: 683px;
//           min-height: 141px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 20px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           text-align: justify;

//           color: #444444;
//         }

//         /* =========================
//            Library Image
//         ========================= */

//         .library-image-wrapper {
//           width: 100%;

//           padding: 10px;

//           box-sizing: border-box;
//         }

//         .library-image {
//           display: block;

//           width: 100%;
//           height: 532px;

//           object-fit: cover;

//           border-radius: 0;
//         }

//         /* =========================
//            Statistics
//         ========================= */

//         .library-statistics {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;

//           width: 913px;
//           height: 105px;

//           padding: 0;
//           gap: 40px;

//           box-sizing: border-box;

//           align-self: stretch;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .library-stat {
//           display: flex;
//           flex-direction: column;
//           align-items: center;

//           padding: 0;

//           height: 105px;

//           flex-shrink: 0;
//         }

//         /* =========================
//            Books
//         ========================= */

//         .books-stat {
//           width: 142px;
//         }

//         /* =========================
//            Journals
//         ========================= */

//         .journals-stat {
//           width: 178px;
//         }

//         /* =========================
//            Main Number
//         ========================= */

//         .stat-number {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 54px;

//           flex-shrink: 0;

//           font-family: "Bitter", serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 45px;
//           line-height: 54px;

//           letter-spacing: 0.01em;

//           color: #018837;

//           text-align: center;
//         }

//         /* =========================
//            Subtitle
//         ========================= */

//         .stat-subtitle {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 29px;

//           flex-shrink: 0;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 400;

//           font-size: 14px;
//           line-height: 18px;

//           letter-spacing: 0.01em;

//           color: #444444;

//           text-align: center;

//           white-space: nowrap;
//         }

//         /* =========================
//            Books / Journals Label
//         ========================= */

//         .stat-label {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 22px;

//           flex-shrink: 0;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 22px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           text-align: center;
//         }

//         /* =========================
//            Statistics Divider
//         ========================= */

//         .stat-divider {
//           width: 1px;
//           height: 62px;

//           flex-shrink: 0;

//           background: #000000;
//         }

//         /* =========================
//            Digital Catalog
//         ========================= */

//         .digital-catalog {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           width: 100%;
//           min-height: 42px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 22px;

//           letter-spacing: 0.01em;

//           color: #444444;

//           gap: 4px;
//         }

//         .digital-catalog strong {
//           color: #444444;
//           flex-shrink: 0;
//         }

//         /* =========================
//            Tablet
//         ========================= */

//         @media (max-width: 1100px) {
//           .library-section {
//             padding: 60px 40px;
//           }

//           .library-intro {
//             gap: 40px;
//           }

//           .library-title {
//             min-width: 330px;
//           }

//           .library-description {
//             width: auto;
//             flex: 1;
//           }

//           .library-statistics {
//             width: 100%;
//           }
//         }

//         /* =========================
//            Mobile
//         ========================= */

//         @media (max-width: 700px) {
//           .library-section {
//             min-height: auto;

//             padding: 40px 20px;

//             gap: 35px;
//           }

//           .library-opening {
//             width: 100%;
//             height: auto;

//             flex-direction: column;

//             padding: 15px;

//             gap: 10px;
//           }

//           .opening-item {
//             font-size: 15px;
//             line-height: 24px;
//           }

//           .opening-divider {
//             width: 80%;
//             height: 1px;
//           }

//           .library-content {
//             gap: 30px;
//           }

//           .library-intro {
//             flex-direction: column;

//             gap: 25px;
//           }

//           .library-title {
//             width: 100%;
//             min-width: 0;

//             height: auto;

//             justify-content: center;
//           }

//           .library-icon {
//             width: 80px;
//             height: 80px;
//           }

//           .library-heading {
//             width: auto;
//             height: 80px;

//             font-size: 40px;
//             line-height: 48px;
//           }

//           .library-description {
//             width: 100%;
//             min-height: auto;

//             padding: 0;

//             font-size: 16px;
//             line-height: 26px;

//             text-align: left;
//           }

//           .library-image-wrapper {
//             padding: 0;
//           }

//           .library-image {
//             width: 100%;
//             height: 300px;
//           }

//           /* =========================
//              Mobile Statistics
//           ========================= */

//           .library-statistics {
//             width: 100%;
//             height: 105px;

//             gap: 20px;
//           }

//           .books-stat,
//           .journals-stat {
//             width: auto;
//             flex: 1;
//           }

//           .stat-number {
//             font-size: 32px;
//             line-height: 40px;

//             height: 44px;
//           }

//           .stat-subtitle {
//             font-size: 12px;
//             line-height: 16px;

//             height: 27px;
//           }

//           .stat-label {
//             font-size: 15px;
//             line-height: 20px;

//             height: 22px;
//           }

//           .stat-divider {
//             height: 50px;
//           }

//           .digital-catalog {
//             padding: 0;

//             font-size: 15px;
//             line-height: 24px;

//             flex-wrap: wrap;
//           }
//         }

//         /* =========================
//            Small Mobile
//         ========================= */

//         @media (max-width: 450px) {
//           .library-section {
//             padding: 30px 15px;
//           }

//           .library-title {
//             gap: 10px;
//           }

//           .library-icon {
//             width: 60px;
//             height: 60px;
//           }

//           .library-heading {
//             height: 60px;

//             font-size: 32px;
//             line-height: 40px;
//           }

//           .library-image {
//             height: 220px;
//           }

//           .library-statistics {
//             gap: 12px;
//           }

//           .stat-number {
//             font-size: 25px;
//             line-height: 32px;
//           }

//           .stat-subtitle {
//             font-size: 11px;
//           }

//           .stat-label {
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LibrarySection;

import React from "react";

const LibrarySection = () => {
  return (
    <section className="library-section">
      {/* =========================
          Opening Information
      ========================= */}
      <div className="library-opening">
        {/* Opening Time */}
        <div className="opening-item">
          <span className="css-clock" aria-hidden="true">
            <span className="clock-hand hour-hand" />
            <span className="clock-hand minute-hand" />
          </span>

          <span>Open: 8:00 AM – 9:00 PM</span>
        </div>

        {/* Divider */}
        <div className="opening-divider" />

        {/* Working Days */}
        <div className="opening-item">
          <span className="css-calendar" aria-hidden="true">
            <span className="calendar-top" />
            <span className="calendar-line line-one" />
            <span className="calendar-line line-two" />
          </span>

          <span>Days: All working days</span>
        </div>
      </div>

      {/* =========================
          Library Content
      ========================= */}
      <div className="library-content">
        {/* =========================
            Heading + Description
        ========================= */}
        <div className="library-intro">
          {/* LEFT: Icon + HTML Heading */}
          <div className="library-title">
            {/* Library Icon */}
            <img src="/fil.png" alt="Library" className="library-icon" />

            {/* HTML Text */}
            <div className="library-heading">
              <div className="heading-about">About the</div>
              <div className="heading-library">Library</div>
            </div>
          </div>

          {/* Description */}
          <div className="library-description">
            A Modern Hub for Academic Excellence The College Library is a fully
            air-conditioned, modern facility located on the 12th floor of the
            academic building, designed to support students and faculty with
            rich academic resources and a comfortable study environment.
          </div>
        </div>

        {/* =========================
            Library Image
        ========================= */}
        <div className="library-image-wrapper">
          <img
            src="/images/f187def8-5bd0-4b17-a1ac-a234d92577a9.jpg"
            alt="College Library"
            className="library-image"
          />
        </div>

        {/* =========================
            Statistics
        ========================= */}
        <div className="library-statistics">
          {/* BOOKS */}
          <div className="library-stat books-stat">
            <div className="stat-number">3,371+</div>

            <div className="stat-subtitle">latest editions</div>

            <div className="stat-label">Books</div>
          </div>

          {/* Divider */}
          <div className="stat-divider" />

          {/* JOURNALS */}
          <div className="library-stat journals-stat">
            <div className="stat-number">1,187+</div>

            <div className="stat-subtitle">367 foreign journals</div>

            <div className="stat-label">Journals</div>
          </div>
        </div>

        {/* =========================
            Digital Catalog
        ========================= */}
        <div className="digital-catalog">
          <span className="digital-catalog-title">Digital Catalog:</span>

          <span className="digital-catalog-text">
            All resources are indexed and catalogued in a computerized database
            for easy access.
          </span>
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

        /* =========================
           CSS CLOCK ICON
        ========================= */

        .css-clock {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 20px;
          height: 20px;

          flex-shrink: 0;

          border: 2px solid #018837;
          border-radius: 50%;

          box-sizing: border-box;
        }

        .clock-hand {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 1.5px;

          background: #018837;

          transform-origin: bottom center;

          border-radius: 2px;
        }

        .hour-hand {
          height: 5px;
          transform: translate(-50%, -100%) rotate(0deg);
        }

        .minute-hand {
          height: 7px;
          transform: translate(-50%, -100%) rotate(45deg);
        }

        /* =========================
           CSS CALENDAR ICON
        ========================= */

        .css-calendar {
          position: relative;

          display: block;

          width: 20px;
          height: 18px;

          flex-shrink: 0;

          border: 2px solid #018837;
          border-radius: 2px;

          box-sizing: border-box;
        }

        .calendar-top {
          position: absolute;

          left: 0;
          top: 4px;

          width: 100%;
          height: 2px;

          background: #018837;
        }

        .calendar-line {
          position: absolute;

          width: 3px;
          height: 3px;

          background: #018837;

          border-radius: 50%;
        }

        .line-one {
          left: 4px;
          top: 9px;
        }

        .line-two {
          left: 10px;
          top: 9px;
        }

        /* =========================
           Opening Divider
        ========================= */

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

        /* =========================
           Library Title
        ========================= */

        .library-title {
          display: flex;
          flex-direction: row;
          align-items: center;

          gap: 20px;

          width: 382px;
          min-width: 382px;

          height: 120px;
        }

        /* =========================
           Library Icon
        ========================= */

        .library-icon {
          display: block;

          width: 120px;
          height: 120px;

          flex-shrink: 0;

          object-fit: contain;
        }

        /* =========================
           HTML Heading
        ========================= */

        .library-heading {
          display: flex;
          flex-direction: column;
          justify-content: center;

          width: 242px;
          height: 120px;

          font-family: "Bitter", serif;

          font-style: normal;
          font-weight: 700;

          font-size: 50px;
          line-height: 60px;

          letter-spacing: 0.01em;
        }

        .heading-about {
          color: #000000;

          white-space: nowrap;
        }

        .heading-library {
          color: #018837;

          white-space: nowrap;
        }

        /* =========================
           Description
        ========================= */

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

          height: 105px;

          padding: 0;

          text-align: center;
        }

        .books-stat {
          width: 142px;
        }

        .journals-stat {
          width: 178px;
        }

        /* =========================
           Main Number
        ========================= */

        .stat-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 54px;

          font-family: "Bitter", serif;

          font-style: normal;
          font-weight: 700;

          font-size: 45px;
          line-height: 54px;

          letter-spacing: 0.01em;

          color: #018837;

          text-align: center;
        }

        /* =========================
           Subtitle
        ========================= */

        .stat-subtitle {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 29px;

          font-family: "Inter", sans-serif;

          font-style: normal;
          font-weight: 400;

          font-size: 14px;
          line-height: 18px;

          letter-spacing: 0.01em;

          color: #444444;

          text-align: center;

          white-space: nowrap;
        }

        /* =========================
           Bold Label
        ========================= */

        .stat-label {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 22px;

          font-family: "Inter", sans-serif;

          font-style: normal;
          font-weight: 700;

          font-size: 18px;
          line-height: 22px;

          letter-spacing: 0.01em;

          color: #000000;

          text-align: center;
        }

        /* =========================
           Statistics Divider
        ========================= */

        .stat-divider {
          width: 1px;
          height: 62px;

          flex-shrink: 0;

          background: #000000;
        }

        /* =========================
           Digital Catalog
        ========================= */

        .digital-catalog {
          display: flex;
          align-items: center;
          gap: 5px;

          width: 100%;

          min-height: 42px;

          padding: 10px;

          box-sizing: border-box;

          font-family: "Inter", sans-serif;

          font-size: 18px;
          line-height: 22px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        .digital-catalog strong {
          font-weight: 700;
          color: #444444;
        }

        .digital-catalog span {
          font-weight: 700;
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
          }

          .library-heading {
            width: auto;
            height: 80px;

            font-size: 40px;
            line-height: 44px;
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

          .stat-subtitle {
            font-size: 12px;
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

            flex-wrap: wrap;
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
          }

          .library-heading {
            height: 60px;

            font-size: 32px;
            line-height: 36px;
          }

          .library-image {
            height: 220px;
          }

          .library-statistics {
            gap: 12px;
          }

          .library-stat {
            width: auto;
            flex: 1;
          }

          .stat-number {
            font-size: 25px;
            line-height: 32px;
          }

          .stat-subtitle {
            font-size: 10px;
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
