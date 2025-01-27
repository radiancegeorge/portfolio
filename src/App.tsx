import React from 'react';
import { Github, Linkedin, Mail, Phone, Terminal, Server, Database, Code2 } from 'lucide-react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-20">
        <section id="about" className="pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Radiance Obi
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Senior Backend Engineer & DevOps Specialist
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/radiancegeorge" 
                 className="transform hover:scale-110 transition-transform duration-200"
                 target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/radiance-obi"
                 className="transform hover:scale-110 transition-transform duration-200"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:Radiancegeorge@outlook.com"
                 className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        <section id="overview" className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Server className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-400">Specialized in Node.js, NestJS, and Express.js with extensive API development experience</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Terminal className="w-8 h-8 mb-4 text-teal-400" />
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-gray-400">Expert in Kubernetes, Docker, and CI/CD pipelines implementation</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Database className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p className="text-gray-400">Proficient in MySQL, PostgreSQL, MongoDB, and Redis</p>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-900 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Radiance Obi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;