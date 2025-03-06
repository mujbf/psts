import React from "react";
import image1 from "/images/people/schmid.png";
import image2 from "/images/people/perera.png";

const PartnersSectionDetails: React.FC = () => {
  const cards = [
    {
      image: image1,
      name: "Leigh A. Schmid",
      description: (
        <>
          <p className="mb-2">
            Leigh began his career as a Customs Inspector at the Peace Bridge in
            Fort Erie, Ontario, and received formal training on Canadian and
            International trade law at the Canadian Customs College in Rigaud,
            Quebec.
          </p>
          <p className="mb-2">
            During his nine years with Revenue Canada - Customs & Excise, he
            held various roles including Inspector, Auditor, Investigator
            (commercial crime), and A/Chief of all Customs ports in Southwestern
            Ontario.
          </p>
          <p className="mb-2">
            Leigh later joined KPMG, where he became the National
            Partner-In-Charge of the Canadian Trade & Customs Practice and Chair
            of KPMG's Trade Practice of the Americas.
          </p>
          <p className="mb-2">
            In 1998, he joined L Brands as Director of Customs Compliance,
            rising to Senior Vice President of Global Trade Compliance by 2007.
          </p>
          <p className="mb-2">His responsibilities included:</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Trade and Customs</li>
            <li>Corporate Social Responsibility</li>
            <li>Brand Protection</li>
            <li>Regulatory Affairs</li>
            <li>Anti-Corruption (FCPA) Compliance</li>
          </ul>
          <p className="mb-2">
            Following L Brands’ restructuring in 2021, Leigh became SVP, Global
            Trade Compliance at Victoria's Secret & Company (VS&Co) before
            retiring in 2023.
          </p>
          <p className="mb-2">
            He served on the Commercial Operations Advisory Committee (COAC) and
            was elected Trade Chair in his second term. He was also a founding
            member of the Private Sector Consultative Group (PSCG) of the World
            Customs Organization.
          </p>
          <p className="mb-2">
            Leigh holds a B.A. (Hons.) Summa Cum Laude from McMaster University,
            a B.Ed. from Brock University, and an MBA from McMaster University.
            He is married, has three children, and three grandchildren.
          </p>
        </>
      ),
    },
    {
      image: image2,
      name: "Sudath Perera",
      description: (
        <>
          <p className="mb-2">
            Sudath Perera was called to the Bar of the Supreme Court of Sri
            Lanka in 1991 and has over 30 years of legal experience. In 2002, he
            founded Sudath Perera Associates, a leading commercial law firm in
            Sri Lanka.
          </p>
          <p className="mb-2">
            Recognized for his excellence, he received the International Law
            Office (ILO) "Client's Choice Award" in 2016 and has been
            consistently listed in Asia Law Profiles and IFLR1000.
          </p>
          <p className="mb-2">His areas of expertise include:</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Brand Protection & Anti-counterfeiting</li>
            <li>Corporate & Commercial Law</li>
            <li>Intellectual Property</li>
            <li>Dispute Resolution</li>
            <li>Regulatory & Compliance Matters</li>
          </ul>
          <p className="mb-2">
            He has represented Sri Lanka in various international legal
            committees, including the INTA Anti-Counterfeiting Committee and the
            INTA Enforcement Committee.
          </p>
          <p className="mb-2">
            Beyond law, he serves as Chairman/Director of multiple companies,
            has held roles in the Export Development Board and Sri Lanka Cricket
            Board, and is an avid wildlife photographer.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <h1 className="montserrat-medium text-4xl md:text-6xl leading-tight text-black-60 mb-16">
          The <span className="text-primary">Partners</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="partners">
          {cards.map((card, index) => (
            <div key={index}>
              <img
                src={card.image}
                alt={card.name}
                className="w-full object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="montserrat-semibold text-3xl text-primary mb-4">
                {card.name}
              </h3>
              <div className="roboto-body text-black-60 mb-4">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSectionDetails;
