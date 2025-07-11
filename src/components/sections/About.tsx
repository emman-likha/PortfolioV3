import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, MapPin, Award } from 'lucide-react';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
};

export const About: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observers for scroll animations
  const timelineObserver = useIntersectionObserver({ threshold: 0.1 });
  const featuresObserver = useIntersectionObserver({ threshold: 0.2 });

  const timelineData = [
    {
      year: '2025',
      title: 'Web Developer | SEO Specialist',
      company: "Ray's LLC",
      location: 'Part Time - Present',
      description: 'Built and maintained websites using Next.js and AI-assisted development tools in a collaborative, fast-paced coding environment. Executed SEO strategies and actively participated in team meetings.',
      image: '/Seo-Gsite.png',
      icon: <Code size={20} />,
      technologies: ['Next.js', 'AI Tools', 'SEO', 'Google Sites'],
      achievements: [
        'Built and maintained websites using Next.js and AI-assisted development tools',
        'Executed SEO strategies using Google Sites and Entity Ranker to improve search visibility',
        'Actively participated in team meetings to contribute ideas and align on project goals'
      ]
    },
    {
      year: '2025',
      title: 'Junior AI Developer',
      company: 'Shore 360',
      location: 'Internship',
      description: 'Assisted in the design and development of AI-driven systems for enhanced traffic safety and management. Gathered training data for AI models and conducted accuracy testing.',
      image: '/Shore-360.jpg',
      icon: <Zap size={20} />,
      technologies: ['AI/ML', 'Python', 'Data Analysis', 'Testing'],
      achievements: [
        'Assisted in the design and development of AI-driven system for enhanced traffic safety',
        'Gathered data for training AI models used in the risk reduction tool for temporary traffic management',
        'Conducted accuracy testing of AI models'
      ]
    },
    {
      year: '2022-2025',
      title: 'Creative Artist',
      company: 'Hooplife Sports Apparel',
      location: 'Remote',
      description: 'Created mock-ups for posting and ready-to-print files. Designed jerseys daily with focus on sports apparel and creative design solutions.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Palette size={20} />,
      technologies: ['Design Software', 'Mock-ups', 'Print Design', 'Creative Suite'],
      achievements: [
        'Create mock ups for posting and ready to print files',
        'Designed 1 - 3 jerseys daily',
        'Developed creative solutions for sports apparel design'
      ]
    },
    {
      year: '2019-2020',
      title: 'Freelance Video Editor',
      company: 'Sushma Home Selling Team',
      location: 'Freelance',
      description: 'Created infographic videos about real estate and ad-like reels for social media posting to enhance marketing efforts.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Award size={20} />,
      technologies: ['Video Editing', 'Infographics', 'Social Media', 'Marketing'],
      achievements: [
        'Create infographic video about real-estate',
        'Create ad-like reels for social media posting',
        'Enhanced marketing efforts through video content'
      ]
    }
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Calculate scroll progress within the timeline section
      const scrollStart = timelineTop - viewportHeight * 0.8;
      const scrollEnd = timelineTop - viewportHeight * 0.2 + timelineHeight;
      const scrollDistance = scrollEnd - scrollStart;
      const currentScroll = -scrollStart;

      let progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));
      setScrollProgress(progress);

      // Determine active timeline item
      let newActiveIndex = 0;
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          if (itemCenter <= viewportHeight / 2) {
            newActiveIndex = index;
          }
        }
      });
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <section id="about" className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        {/* Timeline Section */}
        <div
          ref={timelineObserver.ref}
          className={`mb-20 transition-all duration-1000 ease-out delay-300 ${
            timelineObserver.hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
            timelineObserver.hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 pb-2 leading-tight bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A timeline of my professional growth and key milestones in web development
            </p>
          </div>

          {/* Timeline Container */}
          <div ref={timelineRef} className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600"></div>

            {/* Animated Progress Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-600 to-orange-500 transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                top: 0,
              }}
            ></div>

            {/* Animated Circle Follower */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-all duration-500 ease-out z-20"
              style={{
                top: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 && scrollProgress < 1 ? 1 : 0,
              }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
              {/* Outer ring effect */}
              <div className="absolute -inset-2 border-2 border-orange-300 dark:border-orange-600 rounded-full animate-ping opacity-30"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative flex items-center transition-all duration-1000 ease-out ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${
                    timelineObserver.hasIntersected
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
                  }`}
                  style={{
                    transitionDelay: `${700 + index * 200}ms`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10 transition-all duration-500 ${
                    activeIndex >= index
                      ? 'bg-orange-500 scale-110'
                      : 'bg-slate-300 dark:bg-slate-600 scale-100'
                  }`}>
                    {activeIndex >= index && (
                      <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`w-7/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`group bg-white dark:bg-slate-800 rounded-xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                      activeIndex >= index
                        ? 'border-orange-200 dark:border-orange-800 shadow-orange-100 dark:shadow-orange-900/20'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-bold transition-all duration-500 ${
                          activeIndex >= index
                            ? 'bg-orange-500 scale-110 shadow-lg'
                            : 'bg-slate-400 dark:bg-slate-600 scale-100'
                        }`}>
                          {item.year}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* Left Column - Header & Description */}
                          <div>
                            {/* Header */}
                            <div className="mb-3">
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                                {item.title}
                              </h4>
                              <div className="flex items-center text-slate-600 dark:text-slate-300 mb-1">
                                <span className="font-medium">{item.company}</span>
                              </div>
                              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                                <MapPin size={14} className="mr-1" />
                                {item.location}
                              </div>
                            </div>



                            {/* Technologies */}
                            <div className="mb-3">
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
                          </div>

                          {/* Right Column - Contributions */}
                          <div>
                            <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                              Contributions
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
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-7/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Content */}
        <div
          ref={featuresObserver.ref}
          className="max-w-5xl mx-auto"
        >
          <div className={`transition-all duration-1000 ease-out ${
            featuresObserver.hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            {/* About Box */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-8 md:p-12 overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-50 dark:from-orange-900/10 dark:via-transparent dark:to-orange-900/10 opacity-50"></div>

              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500"></div>

              {/* Content */}
              <div className="relative z-10 space-y-8 text-center">
                <div className="space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl md:text-2xl font-medium">
                    My journey in <span className="text-orange-500 font-semibold">web development</span> started with a curiosity about how things work on the internet.
                    Over the years, I've honed my skills in <span className="text-orange-500 font-semibold">modern frameworks and technologies</span>, always staying
                    current with the <span className="text-orange-500 font-semibold">latest industry trends</span>.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl md:text-2xl font-medium">
                    When I'm not coding, you'll find me <span className="text-orange-500 font-semibold">exploring new technologies</span>, contributing to <span className="text-orange-500 font-semibold">open-source
                    projects</span>, or sharing knowledge with the <span className="text-orange-500 font-semibold">developer community</span>. I believe in <span className="text-orange-500 font-semibold">continuous learning</span>
                    and helping others grow in their <span className="text-orange-500 font-semibold">tech journey</span>.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};