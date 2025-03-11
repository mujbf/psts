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
            Leigh held a variety of positions during his nine years with Revenue
            Canada - Customs & Excise, including Inspector, Auditor,
            Investigator (commercial crime), and A/Chief of all Customs ports in
            Southwestern Ontario.
          </p>
          <p className="mb-2">
            This experience was invaluable during his years working as a
            consultant at KPMG where Leigh became the National Partner-In-Charge
            of the Canadian Trade & Customs Practice and the Chair of KPMG's
            Trade Practice of the Americas, coordinating the trade and customs
            practice in KPMG offices throughout the North and South America.
          </p>
          <p className="mb-2">
            Leigh joined L Brands in 1998 as the Director of Customs Compliance.
            He was promoted to Vice President of International Trade & Customs
            in 2002 and became Senior Vice President of Global Trade Compliance
            in 2007.
          </p>
          <p className="mb-2">
            His responsibilities expanded to include the following functions:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Trade and Customs</li>
            <li>Corporate Social Responsibility</li>
            <li>Brand Protection</li>
            <li>Regulatory Affairs</li>
            <li>Anti-Corruption (FCPA) Compliance</li>
          </ul>
          <p className="mb-2">
            In 2021, L Brands divested the Victoria's Secret and PINK Brands
            which became a stand-alone company, Victoria's Secret & Company
            ("VS&Co"), where Leigh became SVP, Global Trade Compliance. As part
            of his role, Leigh also held the position of President of Retail
            Brokerage Solutions, LLC, a nationally licensed customs brokerage in
            the U.S.A.; and President of Independent Production Services, Inc.,
            a firm that specializes in social compliance audits at factories
            that include trade compliance, labor standards, supply chain
            security and Brand Protection. Leigh retired from VS&Co in July
            2023.
          </p>
          <p className="mb-2">
            Leigh served on the Commercial Operations Advisory Committee
            ("COAC") by appointment of the Secretaries of Homeland Security and
            Treasury Departments for two terms from 2007 to 2011. This committee
            advised U.S. Customs and Border Protection ("CBP") and Treasury
            officials on customs matters impacting commercial operations. COAC
            members elected Leigh to the Trade Chair position during his second
            term.
          </p>
          <p className="mb-2">
            Leigh also represented L Brands on the Private Sector Consultative
            Group (PSCG), the official advisory group to the Policy Commission
            of the World Customs Organization (WCO). Leigh was a founding member
            of the PSCG serving from 2005 to 2021.
          </p>
          <p className="mb-2">
            Leigh holds a Bachelor of Arts degree B.A. (Hons.) Summa Cum Laude
            from McMaster University; a Bachelor of Education (B.Ed.) from Brock
            University, and a Master of Business Administration (MBA) from
            McMaster University.
          </p>
          <p className="mb-2">
            Leigh is happily married, the father of three young adults, and has
            three grandchildren.
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
            Sudath Perera was called to the Bar of the Supreme Court of
            Sri-Lanka in the year 1991 and draws from over 30 years of legal
            experience. A storied career and exposure to multiple facets of the
            legal profession led to Sudath giving life to his vision of
            establishing a trailblazing one-stop shop for commercially focused
            legal solutions, and in 2002 Sudath Perera Associates was born. As
            the Founder and Managing Partner, he has established the firm as a
            benchmark for excellence and innovation in the legal field, with a
            reputation for providing strategic and pragmatic legal solutions to
            a diverse clientele.
          </p>
          <p className="mb-2">
            With a background in hospitality and a steadfast commitment to
            delivering top notch services to his clients, Sudath's expertise
            earned him the coveted International Law Office (ILO) "Client's
            Choice Award" in 2016. He has also consistently been recognized as
            'Leading Lawyer' in legal directories including Asia Law Profiles
            and IFLR1000.
          </p>
          <p className="mb-2">
            Dubbed the "counterfeit buster of Sri-Lanka", Sudath is a pioneer in
            Sri-Lanka for Brand Protection and Anti-counterfeiting, with many
            renowned brands seeking his services in this area. Sudath's
            expertise in the field of intellectual property has been recognized
            globally, as he was the first Sri Lankan to be called to Legal500's
            "Hall of Fame" for Intellectual Property and Dispute Resolution and
            has been listed consecutively since 2020.
          </p>
          <p className="mb-2">
            Sudath's legal acumen and entrepreneurial spirit have been pivotal
            in shaping Sudath Perera Associates into a premier law firm in Sri
            Lanka. Specializing in areas such as corporate and commercial law,
            dispute resolution, intellectual property, and real estate, he is
            known for his ability to tackle complex legal challenges with
            precision and foresight. His dedication to nurturing a
            client-centric approach results in careful assessment of business
            needs and risks to craft innovative, business-friendly solutions.
          </p>
          <p className="mb-2">
            Sudath has led numerous landmark cases and high-stakes negotiations
            throughout his illustrious career, earning recognition from the
            corporate community as a formidable legal negotiator. He is also
            considered a specialist on compliance law matters and frequently
            called upon to assist clients across a wide spectrum of industries
            on regulatory issues, including assisting on high level negotiations
            with governmental departments such as the Board of Investment,
            Customs Department, Exchange Control Department, and Securities and
            Exchange Commission.
          </p>
          <p className="mb-2">
            Sudath is an active member of several key legal representative
            bodies both in Sri-Lanka and internationally and represented Sri
            Lanka in the INTA Anti-Counterfeiting Committee South Asia Committee
            (2018-2019), the INTA Unfair Competition Committee (2020-2023), the
            INTA Enforcement Committee (2024 – 2026), and further served as
            Chairperson of the BASL International Relations Committee
            (2018-2019).
          </p>
          <p className="mb-2">
            Ever the entrepreneur, Sudath is a Founder and Chairman/Director of
            several reputed domestic and foreign companies, which provide
            affiliated services for the firm. He has also served as a Director
            of Export Development Board and in the Board of Control for Cricket
            and holds many directorships on boards of multiple corporates in Sri
            Lanka.
          </p>
          <p className="mb-2">
            When he is not engaged in his legal work, Sudath enjoys travelling
            with his family and is also an avid wildlife photographer.
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
