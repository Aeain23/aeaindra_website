import React from "react";

const projectsData = [
  {
    title: "SD Lite (S&D ERP Extension)",
    desc: "Architected a mission-critical, offline-first mobile app that became the company's highest-selling product. Ensured zero data loss for field agents with a robust local data handling layer and seamless ERP synchronization.",
  },
  {
    title: "MK member (Loyalty & Digital Wallet)",
    desc: "Engineered a secure digital wallet with QR code payments for a major retailer. Modernized the in-store experience by connecting the loyalty system with Google Maps for store locations.",
  },
  {
    title: "Focus Beauty (B2B/B2C E-commerce)",
    desc: "Designed and built a unified e-commerce platform supporting both agent-to-agent (B2B) and agent-to-customer (B2C) sales models, centralizing complex inventory and pricing rules.",
  },
  {
    title: "Self-Checkout (POS Retail Tech)",
    desc: "Developed and deployed custom POS software on specialized Sunmi hardware for major retail chains, optimized for high-volume, sub-second transaction processing.",
  },
];

function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold section-title mb-6">
        Project Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, i) => (
          <div key={i} className="card p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
