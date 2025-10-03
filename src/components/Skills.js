import React from "react";

const skillsData = [
  {
    title: "Architecture & State Management",
    tags: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "Bloc",
      "Provider",
      "River-pod",
    ],
  },
  {
    title: "Mobile & Front-End",
    tags: ["Flutter", "Dart", "Swift", "JavaScript", "React.js"],
  },
  {
    title: "DevOps & Tools",
    tags: ["CI/CD", "Fastlane", "Jenkins", "GitLab", "GitHub", "Jira"],
  },
  {
    title: "Databases & APIs",
    tags: ["RESTful APIs", "SQLite", "Hive", "MySQL", "Firebase"],
  },
  {
    title: "Leadership & Project Management",
    tags: [
      "Agile/Scrum",
      "Team Leadership",
      "Mentorship",
      "Stakeholder Management",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold section-title mb-6">
        Technical Skills
      </h2>
      <div className="card p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-3 text-slate-800">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
