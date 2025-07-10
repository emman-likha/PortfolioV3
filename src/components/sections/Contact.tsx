import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        {/* Simple Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info - Clean & Minimal */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Get in touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities and interesting projects. Whether you have a specific idea or just want to explore possibilities, let's start a conversation.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:bulaonjohnemm4nuel.21@email.com"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">bulaonjohnemm4nuel.21@email.com</p>
                </div>
              </a>

              <a
                href="tel:+639772129486"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300">+63977 212 9486</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">Mabalacat City, Pampanga</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm shadow-lg hover:shadow-xl"
                data-cursor="pointer"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};