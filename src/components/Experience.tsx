import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Learngual",
      location: "Remote",
      period: "Dec 2022 – Present",
      achievements: [
        "Leveraged LLaMA and Ollama models for advanced language learning applications",
        "Implemented essay and conversation topic relevance analysis using cutting-edge NLP technologies",
        "Developed intelligent grammar analysis and feedback generation workflows",
        "Revolutionized speech analysis workflow, achieving 10x performance improvement",
        "Optimized AI model selection, reducing to LLaMA 3.2:3b for enhanced efficiency",
        "Integrated Vosk for transcription and PocketSphinx for speech alignment",
        "Configured bare-metal infrastructure to optimize AI model deployments",
        "Implemented Nginx as a reverse proxy for secure and efficient service routing",
        "Consolidated AI model deployments from 5 separate instances to a single bare-metal infrastructure",
        "Decreased model deployment time from 45 minutes to 6 minutes (87% reduction)",
        "Enhanced user engagement by 40% through innovative React.js interfaces",
        "Successfully launched e-developer section with production-ready API for language learning"
      ]
    },
    {
      title: "Backend Engineer",
      company: "Wynk",
      location: "Lagos, Nigeria (Remote)",
      period: "February 2024 – Present",
      achievements: [
        "Developed backend services for secure bill payment processing and fintech operations",
        "Handled integrations with multiple financial institutions and billers",
        "Automated deployment pipelines and managed staging environments",
        "Enhanced backend scalability and reliability, minimizing system downtime",
        "Designed solutions to improve data integrity and security compliance",
        "Collaborated closely with frontend teams to ensure seamless API integration",
        "Implemented robust security measures for sensitive financial transactions"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Ginyverse",
      location: "Nigeria (Remote)",
      period: "2022 – Early 2024",
      achievements: [
        "Developed cross-platform React Native mobile applications and web platforms",
        "Designed and implemented secure RESTful APIs using Node.js and Express.js",
        "Focused on real-time task-sharing functionalities with enhanced user interaction",
        "Managed deployment pipelines on DigitalOcean using Docker and Kubernetes",
        "Integrated secure payment gateways to improve platform monetization",
        "Conducted comprehensive performance optimization and cross-platform compatibility testing",
        "Ensured high availability and reliability of web and mobile services"
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