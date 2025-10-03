import React from "react";

function Education() {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold section-title mb-6">
        Education & Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
          <ul className="space-y-3">
            <li>
              <strong>B.Sc. (First Class Hons) in Computing</strong> -
              University of Greenwich, UK
            </li>
            <li>
              <strong>Bachelor of Engineering</strong> - West Yangon
              Technological University
            </li>
            <li>
              <strong>Diploma in Strategic Management and Leadership</strong> -
              Strategy First University
            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Key Certifications
          </h3>
          <ul className="space-y-3">
            <li>
              Build Generative AI Agents with Vertex AI and Flutter -{" "}
              <strong>Google Cloud</strong>
            </li>
            <li>
              Certified Scrum Master (CSM) Training - <strong>Skill up</strong>
            </li>
            <li>
              Generative AI Essentials - <strong>Coursera | IBM</strong>
            </li>
            <li>
              Flutter and Dart: Developing Mobile Apps - <strong>IBM</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
