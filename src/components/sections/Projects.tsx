import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

// Add custom CSS animations
const styles = `
  @keyframes slideAcross {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { transform: translateX(0%); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }

  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.6; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.6; }
  }

  .project-transition {
    will-change: transform, filter, opacity;
  }
`;

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: 'Flower Shop E-Commerce',
      description: 'A beautiful and modern e-commerce platform for a flower shop featuring product catalog, shopping cart, user authentication, and responsive design. Built with modern web technologies for optimal performance and user experience.',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      github: '#',
      demo: 'https://flower-shop-ecommerce-red.vercel.app/',
      type: 'Full-Stack'
    },
    {
      title: 'Civic Blog Platform',
      description: 'A modern blog platform focused on civic engagement and community discussions. Features include article publishing, user comments, responsive design, and clean typography for an optimal reading experience.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      github: '#',
      demo: 'https://civic-blog.vercel.app/',
      type: 'Frontend'
    },
    {
      title: 'Todo List Application',
      description: 'A feature-rich todo list application with task management, priority levels, due dates, and local storage persistence. Clean and intuitive interface for efficient task organization and productivity.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      github: '#',
      demo: 'https://todo-list-mu-nine-39.vercel.app/',
      type: 'Frontend'
    }
  ];

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Full-Stack':
        return <Globe size={16} />;
      case 'Frontend':
        return <Code size={16} />;
      case 'Backend':
        return <Database size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visibleProjects.push({
        ...projects[index],
        position: i,
        index: index
      });
    }
    return visibleProjects;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Project Container */}
        <div className="relative">
          {/* Hide navigation buttons when there's only one project */}
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

          {/* Project Display */}
          <div className="flex items-center justify-center h-[600px] relative overflow-hidden">
            {projects.length === 1 ? (
              // Single project - centered display
              <div className="relative">
                <div className="w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl ring-2 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                        {getTypeIcon(projects[0].type)}
                        <span className="ml-1">{projects[0].type}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {projects[0].title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                      {projects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[0].technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={projects[0].github}
                        className="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        data-cursor="pointer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={projects[0].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        data-cursor="pointer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Multiple projects - carousel display
              <>
                {/* Enhanced background transition effect */}
                {isTransitioning && (
                  <>
                    <div
                      className="absolute inset-0 pointer-events-none transition-all duration-800 ease-out"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.08) 50%, transparent 100%)',
                        opacity: 0.8,
                        transform: 'translateX(-100%)',
                        animation: 'slideAcross 0.8s ease-out forwards',
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
                        opacity: 0.6,
                        animation: 'pulse 0.8s ease-out',
                      }}
                    />
                  </>
                )}

                {getVisibleProjects().map((project, idx) => {
                  const { position } = project;
                  const isCenter = position === 0;
                  const isAdjacent = Math.abs(position) === 1;
                  const isVisible = Math.abs(position) <= 2;

                  if (!isVisible) return null;

                  return (
                    <div
                      key={`${project.index}-${idx}`}
                      className={`absolute project-transition transition-all duration-800 ease-out ${
                        isCenter
                          ? 'z-10 scale-100 opacity-100'
                          : isAdjacent
                            ? 'z-5 scale-85 opacity-75'
                            : 'z-0 scale-70 opacity-50'
                      } ${!isCenter ? 'cursor-pointer hover:scale-90' : ''} ${
                        isTransitioning ? 'transform-gpu' : ''
                      }`}
                      style={{
                        transform: `translateX(${position * 220}px) scale(${
                          isCenter ? (isTransitioning ? 1.08 : 1) : isAdjacent ? 0.85 : 0.7
                        }) ${isTransitioning ? (isCenter ? 'translateY(-12px)' : 'translateY(-4px)') : 'translateY(0px)'}`,
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        filter: isTransitioning && isCenter ? 'brightness(1.1) saturate(1.15) drop-shadow(0 8px 32px rgba(249, 115, 22, 0.3))' : 'brightness(1)',
                        zIndex: isCenter ? 10 : isAdjacent ? 5 : 0,
                      }}
                      onClick={() => !isCenter && goToProject(project.index)}
                      data-cursor="pointer"
                    >
                  <div className={`w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-800 ease-out ${
                    isCenter
                      ? `shadow-2xl ring-2 ${isTransitioning ? 'ring-orange-500/60 shadow-orange-500/30' : 'ring-orange-500/20'}`
                      : 'shadow-lg hover:shadow-xl'
                  }`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 ease-out"
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

                      {isCenter && (
                        <div className="flex space-x-3">
                          <a
                            href={project.github}
                            className="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                            data-cursor="pointer"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                          <a
                            href={project.demo}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                            data-cursor="pointer"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
              </>
            )}
          </div>

          {/* Dots Indicator - Only show if multiple projects */}
          {projects.length > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
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