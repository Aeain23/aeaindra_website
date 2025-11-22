import React, { useState } from "react";

const experienceData = [
  {
    title: "Team Lead Developer",
    company: "Tech Tribe",
    period: "2025 - Present",
    details: [
      "Currently leading the development of a 'Shwe Engyin' (Hostel Management) application, overseeing architectural design and implementation.",
      "Responsible for team delegation, sprint planning, and coordinating technical feasibility with management to ensure project delivery aligns with business goals.",
      "Implementing advanced state management and clean architecture to ensure scalability for future features and high user load.",
    ],
  },
  {
    title: "Senior Mobile Developer",
    company: "MyDay Thu Kyawl",
    period: "2024 - 2025",
    details: [
      "Led development of 'weday' (Social App), providing dedicated architecture & state management consulting (MVVM, Provider, River-pod).",
      "Engineered complex real-time functionalities, poll, and theming features requiring sophisticated data flow and native integration (notifications, deep linking).",
      "Mentored junior developers, sharing knowledge and ensuring the team adhered to best practices, contributing to overall code quality and speed.",
    ],
  },
  {
    title: "Senior Mobile Engineer",
    company: "Zote by Focus Innovation",
    period: "2023 - 2024",
    details: [
      "Developed the 'Focus Beauty' E-commerce Application, supporting complex B2B (Agent-to-Agent) and B2C (Agent-to-Customer) sales models.",
      "Architected the application to manage inventory, sales data, and reporting onto a single platform.",
      "Implemented key agent enablement tools, including Product QR/Scanner and a Survey Form (Feedbacks) mechanism.",
    ],
  },
  {
    title: "Junior to Senior Mobile Developer",
    company: "Myanmar Information Technology (MIT)",
    period: "2019 - 2023",
    details: [
      "SD Lite (ERP Extension): Led development of the company's highest-selling product, an offline-first Sales & Distribution app. Established CI/CD pipelines and implemented core ERP features.",
      "MK member (FinTech/Loyalty): Developed the Loyalty, Membership, and Digital Wallet platform, engineering secure QR code payments and point management.",
      "Self-Checkout (POS Retail Tech): Developed and optimized POS software for Sunmi devices used in major retail chains, handling high-volume, real-time transactions.",
    ],
  },
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold section-title mb-6">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((item, i) => (
          <div key={i} className="card p-6">
            <button
              type="button"
              className="flex justify-between items-start cursor-pointer w-full text-left bg-transparent border-0 p-0"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`details-${i}`}
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-md font-medium text-amber-700">
                  {item.company}
                </p>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <span className="text-2xl text-slate-400">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            <div
              id={`details-${i}`}
              className={`details mt-4 text-slate-600 ${
                openIndex === i ? "open" : ""
              }`}
              role="region"
              aria-hidden={openIndex !== i}
            >
              <ul className="list-disc pl-5 space-y-2">
                {item.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
