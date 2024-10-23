import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "Wynk",
      location: "Lagos, Nigeria (Remote)",
      period: "February 2024 – Present",
      achievements: [
        "Developed and maintained the onboarding and authentication microservice",
        "Designed and optimized the vault microservice, reducing transaction errors by 10%",
        "Led the deployment of microservices on Kubernetes in DigitalOcean, reducing deployment time by 70%"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Learngual",
      location: "Remote",
      period: "2023 – Present",
      achievements: [
        "Deployed AI models on Hugging Face",
        "Implemented CI/CD pipelines using GitHub Actions, reducing errors by 25%",
        "Managed Kubernetes-based deployment for frontend and backend",
        "Reduced deployment time by 70%"
      ]
    },
    {
      title: "Backend Developer",
      company: "Harmonic Studioz",
      location: "Nigeria (Remote)",
      period: "December 2022 – November 2023",
      achievements: [
        "Developed APIs for cross-border payment platform",
        "Implemented Docker and Kubernetes for deployment",
        "Integrated multiple service provider APIs, reducing failures by 15%"
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:translate-x-2 transform">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 hover:scale-105 transition-transform duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400 group">
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="flex items-start hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0 animate-pulse-glow"></span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;