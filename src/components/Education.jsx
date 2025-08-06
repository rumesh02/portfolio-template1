import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Education() {
  const [expandedSections, setExpandedSections] = useState({});
  const { isDarkMode } = useTheme();

  const toggleExpansion = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <section 
      id="education" 
      className={`min-h-screen py-24 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className={`text-3xl font-semibold mb-8 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Education</h2>
        <div className="space-y-8">
          {/* University Education */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>B.Sc. (Hons) in Information Technology & Management</h3>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>University of Moratuwa.</p>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Avg GPA - 3.59</p>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2023 - Present</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* University Logo Placeholder */}
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <img src="/images/uom.png" alt="University Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('university')}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          expandedSections.university ? 'rotate-180' : ''
                        } ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {expandedSections.university && (
              <div className={`mt-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <p className={`mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Currently pursuing Bachelor of Science Honours in Information Technology & Management at the University of Moratuwa, 
                  one of Sri Lanka's premier technological universities.
                </p>
                <div className="space-y-2">
                  <h4 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Focus Areas:</h4>
                  <ul className={`list-disc list-inside space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li>Software Engineering & Development</li>
                    <li>Information Systems Management</li>
                    <li>Database Management Systems</li>
                    <li>Web Technologies & Frameworks</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* School Education 1*/}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Advanced Level Education</h3>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>S. Thomas' College, Mt Lavinia.</p>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Physical Science Stream</p>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2021</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* School Logo Placeholder */}
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <img src="/images/stc.png" alt="School Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('school1')}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          expandedSections.school1 ? 'rotate-180' : ''
                        } ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {expandedSections.school1 && (
              <div className={`mt-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <p className={`mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Completed secondary education at S Thomas' College Mt Lavinia, one of Sri Lanka's most prestigious educational institutions.
                </p>
                <div className="space-y-2">
                  <h4 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Achievements & Activities:</h4>
                  <ul className={`list-disc list-inside space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li>
                        Studied G.C.E Advanced Level Physical Science stream with a focus on 
                        <span className="font-medium"> Combined Maths</span>, 
                        <span className="font-medium"> Physics</span>, 
                        <span className="font-medium"> Chemistry</span>, and 
                        <span className="font-medium"> General English</span>.
                    </li>
                    <li>
                        Served as the Assistant Secretary of the Senior Science Society, contributing to the organization of academic events and promoting interest in science among peers.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* School Education 2*/}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Ordinary Level Education</h3>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>S. Thomas' College, Mt Lavinia.</p>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Obtained 9 A Grades</p>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2018</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* School Logo Placeholder */}
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <img src="/images/stc.png" alt="School Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('school2')}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          expandedSections.school2 ? 'rotate-180' : ''
                        } ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {expandedSections.school2 && (
              <div className={`mt-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <p className={`mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Completed secondary education at S Thomas' College Mt Lavinia, one of Sri Lanka's most prestigious educational institutions.
                </p>
                <div className="space-y-2">
                  <h4 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Achievements & Activities:</h4>
                  <ul className={`list-disc list-inside space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li>
                        Successfully completed the G.C.E. Ordinary Level examination with 9 A grades, demonstrating strong academic performance across all subjects.
                    </li>
                    <li>
                        Served as the Project Coordinator of the Junior Science Society, contributing to the organization of academic events and promoting interest in science among peers.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Certifications */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Relevant Certifications</h3>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Professional Development</p>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2023 - 2024</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleExpansion('certifications')}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          expandedSections.certifications ? 'rotate-180' : ''
                        } ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {expandedSections.certifications && (
              <div className="mt-4 space-y-2">
                <div className={`flex justify-between items-center p-3 rounded ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>AWS Certified Developer - SoloLearn</span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2024</span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>React Developer Certification - Codecademy</span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2023</span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>JavaScript Advanced Concepts - Codecademy</span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2023</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
