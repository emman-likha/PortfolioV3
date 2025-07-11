import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Eye, X } from 'lucide-react';
import Orb from '../Orb';

// Custom hook for typewriter effect
const useTypewriter = (words: string[], typingSpeed: number = 100, deletingSpeed: number = 50, pauseDuration: number = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
};

export const Hero: React.FC = () => {
  const roles = ['Web Developer', 'Graphic Designer', 'Web3 Developer', 'Video Editor'];
  const typewriterText = useTypewriter(roles, 100, 50, 2000);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">

          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-6 pb-2 leading-tight">
                <span className="block">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                  John Emmanuel
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 min-h-[2rem]">
                I am a <span className="text-orange-500 font-semibold">{typewriterText}</span>
                <span className="animate-pulse text-orange-500">|</span>
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                I craft beautiful, functional, and user-centered digital experiences that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openResumeModal}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
                data-cursor="pointer"
              >
                <Eye className="mr-2" size={20} />
                View Resume
              </button>
              <button
                className="inline-flex items-center px-8 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
                data-cursor="pointer"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="p-3 rounded-full bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md"
                data-cursor="pointer"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md"
                data-cursor="pointer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md"
                data-cursor="pointer"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Picture Area */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Profile Picture with Orange Orb Border */}
            <div className="relative w-96 h-96 lg:w-[32rem] lg:h-[32rem]">
              {/* Orange Orb Background/Border */}
              <div className="absolute inset-0 w-full h-full">
                <Orb
                  hoverIntensity={0.5}
                  rotateOnHover={true}
                  hue={35}
                  forceHoverState={false}
                />
              </div>

              {/* Profile Picture - Larger size with orb as border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/Profiel-Pic.jpg"
                    alt="John Emmanuel Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                            <div class="text-center text-white">
                              <div class="text-4xl mb-2">👤</div>
                              <p class="text-sm">Add Your Photo</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Resume</h3>
              <button
                onClick={closeResumeModal}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} className="text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 p-4">
                <object
                  data="/My-Resume.pdf"
                  type="application/pdf"
                  className="w-full h-full rounded-lg border border-slate-200 dark:border-slate-600"
                  style={{ minHeight: '600px' }}
                >
                  {/* Fallback for browsers that don't support object tag */}
                  <div className="flex flex-col items-center justify-center h-full bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-center p-8">
                      <Eye className="mx-auto mb-4 text-slate-400" size={48} />
                      <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                        PDF Viewer Not Available
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Your browser doesn't support inline PDF viewing.
                      </p>
                      <a
                        href="/My-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                      >
                        <Eye className="mr-2" size={20} />
                        Open PDF in New Tab
                      </a>
                    </div>
                  </div>
                </object>
              </div>

              {/* Alternative action buttons */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex justify-center space-x-4">
                  <a
                    href="/My-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    <Eye className="mr-2" size={16} />
                    Open in New Tab
                  </a>
                  <a
                    href="/My-Resume.pdf"
                    download="John_Emmanuel_Resume.pdf"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  >
                    <Eye className="mr-2" size={16} />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};