import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-[1.02]">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5" />, text: "Radiancegeorge@outlook.com", href: "mailto:Radiancegeorge@outlook.com" },
                { icon: <Phone className="w-5 h-5" />, text: "+234 813 854 4036", href: "tel:+2348138544036" },
                { icon: <Linkedin className="w-5 h-5" />, text: "linkedin.com/in/radiance-obi", href: "https://linkedin.com/in/radiance-obi" },
                { icon: <Github className="w-5 h-5" />, text: "github.com/radiancegeorge", href: "https://github.com/radiancegeorge" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group hover:translate-x-2 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
            <a
              href="mailto:Radiancegeorge@outlook.com"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;