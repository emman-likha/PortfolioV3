import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create engaging user experiences.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user interactions.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience building 
            modern web applications. I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. 
              Over the years, I've honed my skills in modern frameworks and technologies, always staying 
              current with the latest industry trends.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and helping others grow in their tech journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};