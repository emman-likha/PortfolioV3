import React, { useState } from 'react';
import { ExternalLink, Code, Database, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: 'Currency Converter',
      description: 'A Philippine Peso currency converter application that provides real-time exchange rates and conversion functionality. Features clean UI design, multiple currency support, and accurate conversion calculations for financial transactions.',
      image: '/Piso-Converter.png',
      technologies: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      demo: 'https://currency-conversion-xi.vercel.app/',
      type: 'Frontend'
    },
    {
      title: 'TechFlow Landing Page',
      description: 'A modern and professional landing page for TechFlow digital solutions company. Features responsive design, smooth animations, pricing tables, testimonials, and contact forms. Built with modern web technologies for optimal performance.',
      image: '/Techflow.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      demo: 'https://landingpage-practice.vercel.app/',
      type: 'Frontend'
    },
    {
      title: 'Flower Shop E-Commerce',
      description: 'A beautiful and modern e-commerce platform for a flower shop featuring product catalog, shopping cart, user authentication, and responsive design. Built with modern web technologies for optimal performance and user experience.',
      image: '/E-commerce.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      demo: 'https://flower-shop-ecommerce-red.vercel.app/',
      type: 'Full-Stack'
    },
    {
      title: 'Civic Blog Platform',
      description: 'A modern blog platform focused on civic engagement and community discussions. Features include article publishing, user comments, responsive design, and clean typography for an optimal reading experience.',
      image: '/Civic-Blog.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      demo: 'https://civic-blog.vercel.app/',
      type: 'Frontend'
    },
    {
      title: 'Todo List Application',
      description: 'A feature-rich todo list application with task management, priority levels, due dates, and local storage persistence. Clean and intuitive interface for efficient task organization and productivity.',
      image: '/Scribble.png',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      demo: 'https://todo-list-mu-nine-39.vercel.app/',
      type: 'Frontend'
    }
  ];

  // Remove auto-rotation - user requested to remove it

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Frontend':
        return <Globe size={16} />;
      case 'Backend':
        return <Database size={16} />;
      case 'Full-Stack':
        return <Code size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 pb-2 leading-tight bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="relative mb-16 overflow-visible">
          {projects.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed scale-95' : ''
                }`}
                data-cursor="pointer"
                disabled={isTransitioning}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextProject}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed scale-95' : ''
                }`}
                data-cursor="pointer"
                disabled={isTransitioning}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="flex items-center justify-center min-h-[500px] relative overflow-visible py-16">
            <div className="relative w-full max-w-6xl overflow-visible">
              <div
                className="flex items-center justify-center gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${(2 - currentIndex) * 320}px)`,
                }}
              >
                {projects.map((project, index) => {
                  const isCenter = index === currentIndex;
                  const distance = Math.abs(index - currentIndex);

                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 transition-all duration-700 ease-in-out cursor-pointer ${
                        isCenter
                          ? 'scale-105 z-10'
                          : distance === 1
                            ? 'scale-90 blur-sm opacity-70'
                            : 'scale-75 blur-md opacity-40'
                      }`}
                      onClick={() => goToProject(index)}
                      data-cursor="pointer"
                    >
                      <div className="w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl ring-2 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-105"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                              {getTypeIcon(project.type)}
                              <span className="ml-1">{project.type}</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex justify-center">
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                              data-cursor="pointer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {projects.length > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative rounded-full transition-all duration-300 ease-out ${
                    index === currentIndex
                      ? 'w-3 h-3 bg-orange-500 shadow-lg ring-2 ring-orange-200 dark:ring-orange-800'
                      : `w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-orange-300 dark:hover:bg-orange-700 hover:scale-110 ${
                          isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                        }`
                  } ${isTransitioning && index !== currentIndex ? 'pointer-events-none' : ''}`}
                  data-cursor="pointer"
                  disabled={isTransitioning}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
