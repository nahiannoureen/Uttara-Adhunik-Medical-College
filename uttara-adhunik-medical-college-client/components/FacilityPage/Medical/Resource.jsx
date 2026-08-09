import React from "react";

const facilities = [
  "Computer Access: Multiple modern computers equipped with webcams, digital cameras, and necessary peripherals.",
  "Peripheral Devices: Printers and scanners available for both students and faculty.",
  "Connectivity Tools: Fax, internet, and email services are freely available and extensively used.",
];

const databases = [
  "Hinari & Medline: Students and teachers enjoy online access to internationally recognized medical databases such as Hinari and Medline, supporting evidence-based education and research.",
];

const academicActivities = ["Clinical Seminars", "Workshops", "Symposia"];

const ArrowButton = () => {
  return (
    <a href="#" className="resource-arrow" aria-label="Learn more">
      <span>→</span>
    </a>
  );
};

const ResourceCard = ({ children, large = false }) => {
  return (
    <div className={`resource-card ${large ? "resource-card-large" : ""}`}>
      <p>{children}</p>
      <ArrowButton />
    </div>
  );
};

const Resource = () => {
  return (
    <section className="resource-section">
      <div className="resource-container">
        {/* =================================
            Facilities & Resources
        ================================= */}
        <div className="resource-group">
          <div className="resource-heading">
            <h2>Facilities &amp; Resources</h2>
          </div>

          <div className="resource-grid">
            {facilities.map((item, index) => (
              <ResourceCard key={index}>{item}</ResourceCard>
            ))}
          </div>
        </div>

        {/* =================================
            Academic Databases
        ================================= */}
        <div className="resource-group database-group">
          <div className="resource-heading">
            <h2>Academic Databases</h2>
          </div>

          <div className="database-grid">
            {databases.map((item, index) => (
              <ResourceCard key={index} large>
                {item}
              </ResourceCard>
            ))}
          </div>
        </div>

        {/* =================================
            Academic Activities
        ================================= */}
        <div className="resource-group activities-group">
          <div className="resource-heading">
            <h2>Academic Activities</h2>
          </div>

          <div className="activities-grid">
            <div className="activities-column">
              <ResourceCard>{academicActivities[0]}</ResourceCard>

              <ResourceCard>{academicActivities[1]}</ResourceCard>

              <ResourceCard>{academicActivities[2]}</ResourceCard>
            </div>
          </div>

          <p className="activities-description">
            These activities are regularly organized under MEU, promoting
            interdisciplinary collaboration and continuous professional
            development among faculty and students.
          </p>
        </div>
      </div>

      {/* =================================
          Styles
      ================================= */}
      <style>{`
        /* =================================
           Main Section
        ================================= */

        .resource-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
          min-height: 1152.79px;

          padding: 80px;

          box-sizing: border-box;

          background: #ffffff;
        }

        .resource-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
          max-width: 1440px;

          gap: 30px;
        }

        /* =================================
           Groups
        ================================= */

        .resource-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;

          gap: 30px;
        }

        /* =================================
           Headings
        ================================= */

        .resource-heading {
          display: flex;
          flex-direction: row;
          align-items: center;

          width: 100%;
          height: 80px;

          padding: 10px;

          box-sizing: border-box;
        }

        .resource-heading h2 {
          margin: 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 500;

          font-size: 50px;
          line-height: 60px;

          letter-spacing: 0.01em;

          color: #000000;
        }

        /* =================================
           Facilities Grid
        ================================= */

        .resource-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          width: 100%;

          gap: 30px;
        }

        .resource-grid .resource-card:last-child {
          grid-column: 1 / 2;
        }

        /* =================================
           Resource Card
        ================================= */

        .resource-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          width: 100%;
          min-height: 100px;

          padding: 20px;

          gap: 10px;

          box-sizing: border-box;

          background: rgba(1, 136, 55, 0.1);
        }

        .resource-card p {
          margin: 0;

          flex: 1;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 18px;
          line-height: 30px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        /* =================================
           Arrow
        ================================= */

        .resource-arrow {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 36.4px;
          height: 36.4px;

          flex-shrink: 0;

          background: #ffffff;

          border-radius: 2.07972px;

          text-decoration: none;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .resource-arrow span {
          display: flex;
          align-items: center;
          justify-content: center;

          color: #018837;

          font-family: Arial, sans-serif;
          font-size: 25px;
          font-weight: 400;

          line-height: 1;

          transform: translateY(-1px);
        }

        .resource-arrow:hover {
          background: #018837;
          transform: translateX(3px);
        }

        .resource-arrow:hover span {
          color: #ffffff;
        }

        /* =================================
           Academic Database
        ================================= */

        .database-group {
          width: 100%;
        }

        .database-grid {
          display: flex;

          width: 100%;
        }

        .resource-card-large {
          width: 100%;
          height: 100px;
        }

        /* =================================
           Academic Activities
        ================================= */

        .activities-group {
          width: 100%;
        }

        .activities-grid {
          display: flex;

          width: 100%;
        }

        .activities-column {
          display: flex;
          flex-direction: column;

          width: 705px;

          gap: 30px;
        }

        .activities-column .resource-card {
          width: 705px;
          min-height: 76.4px;
          height: 76.4px;
        }

        .activities-column .resource-card p {
          height: 30px;
        }

        /* =================================
           Activities Description
        ================================= */

        .activities-description {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          min-height: 60px;

          margin: 0;
          padding: 0;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;

          font-size: 18px;
          line-height: 30px;

          letter-spacing: 0.01em;

          text-align: center;

          color: #000000;
        }

        /* =================================
           Tablet
        ================================= */

        @media (max-width: 1100px) {
          .resource-section {
            padding: 60px 40px;
          }

          .resource-grid {
            grid-template-columns: 1fr;
          }

          .resource-grid .resource-card:last-child {
            grid-column: auto;
          }

          .activities-column {
            width: 100%;
          }

          .activities-column .resource-card {
            width: 100%;
          }
        }

        /* =================================
           Mobile
        ================================= */

        @media (max-width: 600px) {
          .resource-section {
            padding: 40px 20px;

            min-height: auto;
          }

          .resource-container {
            gap: 25px;
          }

          .resource-group {
            gap: 20px;
          }

          .resource-heading {
            height: auto;

            padding: 0;
          }

          .resource-heading h2 {
            font-size: 34px;
            line-height: 42px;
          }

          .resource-card {
            min-height: 90px;

            padding: 15px;
          }

          .resource-card p {
            font-size: 15px;
            line-height: 24px;
          }

          .resource-arrow {
            width: 32px;
            height: 32px;
          }

          .resource-arrow span {
            font-size: 21px;
          }

          .activities-column {
            gap: 15px;
          }

          .activities-column .resource-card {
            width: 100%;
            height: 65px;
            min-height: 65px;
          }

          .activities-description {
            font-size: 15px;
            line-height: 24px;

            text-align: center;
          }
        }

        /* =================================
           Small Mobile
        ================================= */

        @media (max-width: 400px) {
          .resource-section {
            padding: 30px 15px;
          }

          .resource-heading h2 {
            font-size: 28px;
            line-height: 36px;
          }

          .resource-card {
            padding: 12px;
          }

          .resource-card p {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default Resource;
