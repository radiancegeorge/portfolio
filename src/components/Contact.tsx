import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:Radiancegeorge@outlook.com" 
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Radiancegeorge@outlook.com</span>
              </a>
              <a href="tel:+2348138544036"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+234 813 854 4036</span>
              </a>
              <a href="https://linkedin.com/in/radiance-obi"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/radiance-obi</span>
              </a>
              <a href="https://github.com/radiancegeorge"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
                <span>github.com/radiancegeorge</span>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
            <a href="mailto:Radiancegeorge@outlook.com"
               className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;