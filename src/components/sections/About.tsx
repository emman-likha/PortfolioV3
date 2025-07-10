import React from 'react';
import { Code, Palette, Zap, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  const timelineData = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Corp',
      location: 'Remote',
      description: 'Leading development of modern web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Award size={20} />,
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
      achievements: [
        'Led team of 5 developers',
        'Improved app performance by 40%',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd',
      location: 'San Francisco, CA',
      description: 'Developed and maintained multiple client projects, focusing on responsive design and optimal user experience across various platforms.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Code size={20} />,
      technologies: ['React', 'Express.js', 'MongoDB', 'Docker'],
      achievements: [
        'Built 15+ client projects',
        'Reduced load times by 60%',
        'Implemented responsive designs'
      ]
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'New York, NY',
      description: 'Specialized in creating beautiful, interactive user interfaces with modern JavaScript frameworks and cutting-edge design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Palette size={20} />,
      technologies: ['JavaScript', 'Vue.js', 'CSS3', 'Figma'],
      achievements: [
        'Designed 20+ UI components',
        'Improved user engagement by 35%',
        'Created design system'
      ]
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'Austin, TX',
      description: 'Started my professional journey learning modern web development practices and contributing to various startup projects.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Zap size={20} />,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      achievements: [
        'Completed 50+ coding challenges',
        'Built first production app',
        'Learned agile methodology'
      ]
    }
  ];

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

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A timeline of my professional growth and key milestones in web development
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10">
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                            <span className="font-medium">{item.company}</span>
                          </div>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                            <MapPin size={14} className="mr-1" />
                            {item.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start text-slate-600 dark:text-slate-300 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Content & Features */}
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

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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