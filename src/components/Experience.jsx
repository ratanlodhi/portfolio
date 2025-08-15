import { useEffect } from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import AOS from 'aos';

const Experience = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const formatDate = (dateString) => {
    if (dateString === 'present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const allExperience = [...data.experience, ...data.education].sort((a, b) => {
    const aDate = a.endDate === 'present' ? new Date() : new Date(a.endDate);
    const bDate = b.endDate === 'present' ? new Date() : new Date(b.endDate);
    return bDate - aDate;
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allExperience.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={index * 100}
              >
                {/* Content */}
                <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {item.type === 'work' ? (
                            <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                          ) : (
                            <GraduationCap className="text-purple-600 dark:text-purple-400" size={20} />
                          )}
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                            {item.type === 'work' ? 'Work Experience' : 'Education'}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.title || item.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {item.company || item.institution}
                        </h4>
                      </div>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>
                          {formatDate(item.startDate)} - {formatDate(item.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-3">
                          <Award className="text-green-600 dark:text-green-400" size={16} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Key Achievements
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-bold"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                      item.type === 'work' 
                        ? 'bg-blue-600' 
                        : 'bg-purple-600'
                    } shadow-lg`}></div>
                    <div className={`absolute -inset-2 rounded-full ${
                      item.type === 'work' 
                        ? 'bg-blue-100 dark:bg-blue-900' 
                        : 'bg-purple-100 dark:bg-purple-900'
                    } opacity-50 animate-pulse`}></div>
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;