import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import AOS from 'aos';

const About = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'];

  const getSkillsByCategory = (category) => {
    return data.skills.filter(skill => skill.category === category);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio and Contact */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {data.personal.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{data.personal.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{data.personal.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{data.personal.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src={data.personal.profileImage}
                  alt={data.personal.name}
                  className="w-full h-full rounded-2xl object-cover bg-gray-200 dark:bg-gray-700"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTUwQzExMy41NzEgMTUwIDg0IDEyMC40MjkgODQgODRTMTEzLjU3MSAxOCAxNTAgMThTMjE2IDQ3LjU3MSAyMTYgODRTMTg2LjQyOSAxNTAgMTUwIDE1MFpNMTUwIDE4MEMxOTEuNDIxIDE4MCAyMjUgMjEzLjU3OSAyMjUgMjU1VjI3MEg5NlYyNTVDOTYgMjEzLjU3OSAxMjkuNTc5IDE4MCAxNzEgMTgwSDEyOVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div
                  key={category}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
                  data-aos="fade-up"
                  data-aos-delay={categoryIndex * 100}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;