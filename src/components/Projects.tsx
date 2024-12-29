import React from 'react';
import { Code, Server, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Job Application Research Tool",
      period: "2024 - Present",
      description: "A distributed AI-driven job application research system with advanced NLP capabilities",
      technologies: [
        "Flowise", 
        "Node.js", 
        "OpenAI GPT", 
        "Langchain", 
        "Web Scraping", 
        "Natural Language Processing", 
        "Retrieval-Augmented Generation (RAG)", 
        "Microservices Architecture"
      ],
      features: [
        "Scrapes and extracts job description details",
        "Performs semantic analysis of job requirements",
        "Generates contextually relevant application emails",
        "Validates email content against job specifications",
        "Implements advanced natural language processing techniques"
      ],
      icon: <Brain className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Personal Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 transform"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="transform transition-transform duration-300 hover:scale-110 animate-float">
                {project.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.period}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-200 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="hover:text-blue-300 transition-colors">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
