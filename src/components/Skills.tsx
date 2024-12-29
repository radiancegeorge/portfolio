import React from 'react';
import { Code2, Database, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: [
        "JavaScript (Advanced)", 
        "TypeScript", 
        "Python (Intermediate)", 
        "Node.js", 
        "React.js (Advanced)", 
        "React Native (Advanced)", 
        "NestJS", 
        "Express.js (Advanced)"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Code2 className="w-6 h-6 text-red-400" />,
      skills: [
        "LLaMA", 
        "Ollama", 
        "Hugging Face Transformers", 
        "OpenAI API", 
        "Natural Language Processing", 
        "Retrieval-Augmented Generation (RAG)"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-teal-400" />,
      skills: [
        "MySQL", 
        "PostgreSQL", 
        "MongoDB", 
        "Redis", 
        "Firebase Realtime Database"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: [
        "Kubernetes (Intermediate)", 
        "Docker (Advanced)", 
        "CI/CD", 
        "DigitalOcean", 
        "Bare-metal Infrastructure", 
        "Terraform", 
        "Nginx", 
        "GitHub Actions"
      ]
    },
    {
      title: "Other Technologies",
      icon: <GitBranch className="w-6 h-6 text-green-400" />,
      skills: [
        "Web3", 
        "RabbitMQ", 
        "RESTful APIs", 
        "GraphQL", 
        "Microservices", 
        "Webpack", 
        "Babel", 
        "ESLint"
      ]
    }
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 transform"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="transform transition-transform duration-300 hover:scale-110 animate-float">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;