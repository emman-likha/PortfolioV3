import React from 'react';

export const Skills: React.FC = () => {
  const technologies = [
    {
      name: 'HTML5',
      icon: <i className="ci ci-html ci-4x"></i>,
      color: ''
    },
    {
      name: 'CSS3',
      icon: <i className="ci ci-css ci-4x"></i>,
      color: ''
    },
    {
      name: 'Bootstrap',
      icon: <i className="ci ci-bootstrap ci-4x"></i>,
      color: ''
    },
    {
      name: 'Next.js',
      icon: <i className="ci ci-nextjs ci-4x"></i>,
      color: ''
    },
    {
      name: 'React',
      icon: <i className="ci ci-react ci-4x"></i>,
      color: ''
    },
    {
      name: 'JavaScript',
      icon: <i className="ci ci-javascript ci-4x"></i>,
      color: ''
    },
    {
      name: 'TypeScript',
      icon: <i className="ci ci-typescript ci-4x"></i>,
      color: ''
    },
    {
      name: 'MongoDB',
      icon: <i className="ci ci-mongodb ci-4x"></i>,
      color: ''
    },
    {
      name: 'Node.js',
      icon: <i className="ci ci-nodejs ci-4x"></i>,
      color: ''
    },
    {
      name: 'Python',
      icon: <i className="ci ci-python ci-4x"></i>,
      color: ''
    },
    {
      name: 'Git',
      icon: <i className="ci ci-git ci-4x"></i>,
      color: ''
    },
    {
      name: 'Photoshop',
      icon: <i className="ci ci-photoshop ci-4x"></i>,
      color: ''
    },
    {
      name: 'Premiere Pro',
      icon: <i className="ci ci-premierepro ci-4x"></i>,
      color: ''
    },
    {
      name: 'Figma',
      icon: <i className="ci ci-figma ci-4x"></i>,
      color: ''
    },
    {
      name: 'Adobe Illustrator',
      icon: <i className="ci ci-illustrator ci-4x"></i>,
      color: ''
    },
    {
      name: 'Tailwind CSS',
      icon: <i className="ci ci-tailwindcss ci-4x"></i>,
      color: ''
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6 pb-2 leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center cursor-pointer"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              data-cursor="pointer"
            >
              {/* Icon container */}
              <div className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-sm group-hover:drop-shadow-xl mb-3 sm:mb-4">
                {tech.icon}
              </div>

              {/* Tech name */}
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 leading-tight opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-sm font-medium">Always learning, always growing</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};