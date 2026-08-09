import React from "react";

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        {/* =========================
            Top Content
        ========================= */}
        <div className="education-header">
          {/* Left: Icon + Heading */}
          <div className="education-title">
            <div className="medical-icon">
              <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M49 20V14C49 10.7 51.7 8 55 8H65C68.3 8 71 10.7 71 14V20"
                  fill="none"
                  stroke="#018837"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <rect
                  x="10"
                  y="20"
                  width="100"
                  height="84"
                  rx="8"
                  fill="none"
                  stroke="#018837"
                  strokeWidth="7"
                />

                <path
                  d="M60 42V82"
                  stroke="#018837"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <path
                  d="M40 62H80"
                  stroke="#018837"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="education-title-text">
              <h2>Medical Education Unit (MEU)</h2>
            </div>
          </div>

          {/* Right: Description */}
          <div className="education-description">
            <p>
              Enhancing Learning Through Technology &amp; Collaboration The
              Medical Education Unit (MEU) is a vital academic support center of
              the college, situated adjacent to the library. It is designed to
              enhance the quality of medical education by offering digital
              resources, training facilities, and collaborative opportunities.
            </p>
          </div>
        </div>

        {/* =========================
            Large Image
        ========================= */}
        <div className="education-image-wrapper">
          <img
            src="/images/cefc051c-3365-455b-80e4-db0e138feccd.jpg"
            alt="Medical Education Unit"
            className="education-image"
          />
        </div>
      </div>

      {/* =========================
          Styles
      ========================= */}
      <style>{`
        /* =========================
           Education Section
        ========================= */

        .education-section {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          min-height: 932.5px;

          padding: 80px;

          gap: 50px;

          box-sizing: border-box;

          background: #e6f4eb;
        }

        /* =========================
           Main Container
        ========================= */

        .education-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
          max-width: 1440px;

          gap: 50px;
        }

        /* =========================
           Header
        ========================= */

        .education-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          width: 100%;
          min-height: 170px;

          gap: 200px;
        }

        /* =========================
           Title
        ========================= */

        .education-title {
          display: flex;
          flex-direction: row;
          align-items: center;

          width: 593px;
          min-width: 0;

          gap: 20px;
        }

        /* =========================
           Medical Icon
        ========================= */

        .medical-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 120px;
          height: 120px;

          flex-shrink: 0;
        }

        .medical-icon svg {
          width: 120px;
          height: 120px;
        }

        /* =========================
           Title Text
        ========================= */

        .education-title-text {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 453px;
          min-height: 120px;
        }

        .education-title-text h2 {
          margin: 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;

          font-size: 50px;
          line-height: 60px;

          letter-spacing: 0.01em;

          color: #018837;
        }

        /* =========================
           Description
        ========================= */

        .education-description {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 683px;
          min-height: 170px;

          padding: 10px;

          box-sizing: border-box;
        }

        .education-description p {
          width: 663px;

          margin: 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;

          font-size: 20px;
          line-height: 30px;

          letter-spacing: 0.01em;

          text-align: justify;

          color: #444444;
        }

        /* =========================
           Image Wrapper
        ========================= */

        .education-image-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;

          height: 552.5px;

          padding: 10px;

          box-sizing: border-box;
        }

        /* =========================
           Image
        ========================= */

        .education-image {
          display: block;

          width: 100%;
          height: 532.5px;

          object-fit: cover;

          object-position: center;

          border: none;
        }

        /* =========================
           Tablet
        ========================= */

        @media (max-width: 1200px) {
          .education-section {
            padding: 60px 40px;
          }

          .education-header {
            gap: 60px;
          }

          .education-title {
            width: 50%;
          }

          .education-title-text {
            width: calc(100% - 140px);
          }

          .education-title-text h2 {
            font-size: 40px;
            line-height: 50px;
          }

          .education-description {
            width: 50%;
          }

          .education-description p {
            width: 100%;
            font-size: 18px;
            line-height: 28px;
          }
        }

        /* =========================
           Tablet / Small
        ========================= */

        @media (max-width: 850px) {
          .education-header {
            flex-direction: column;
            align-items: center;

            gap: 30px;
          }

          .education-title {
            width: 100%;
            justify-content: center;
          }

          .education-description {
            width: 100%;
            min-height: auto;
          }

          .education-description p {
            width: 100%;
          }

          .education-image-wrapper {
            height: auto;
          }

          .education-image {
            height: 400px;
          }
        }

        /* =========================
           Mobile
        ========================= */

        @media (max-width: 600px) {
          .education-section {
            padding: 40px 20px;

            min-height: auto;

            gap: 30px;
          }

          .education-container {
            gap: 30px;
          }

          .education-header {
            gap: 25px;
          }

          .education-title {
            flex-direction: column;

            gap: 10px;

            text-align: center;
          }

          .medical-icon,
          .medical-icon svg {
            width: 90px;
            height: 90px;
          }

          .education-title-text {
            width: 100%;
            min-height: auto;
          }

          .education-title-text h2 {
            font-size: 32px;
            line-height: 40px;

            text-align: center;
          }

          .education-description {
            padding: 0;

            width: 100%;
          }

          .education-description p {
            font-size: 16px;
            line-height: 26px;

            text-align: justify;
          }

          .education-image-wrapper {
            padding: 0;

            height: auto;
          }

          .education-image {
            width: 100%;
            height: 280px;

            object-fit: cover;
          }
        }

        /* =========================
           Small Mobile
        ========================= */

        @media (max-width: 400px) {
          .education-section {
            padding: 30px 15px;
          }

          .education-title-text h2 {
            font-size: 28px;
            line-height: 36px;
          }

          .education-description p {
            font-size: 15px;
            line-height: 24px;
          }

          .education-image {
            height: 230px;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
