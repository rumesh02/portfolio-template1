import { useState } from 'react';

export default function Education() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpansion = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <section id="education" className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8">
          {/* University Education */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">B.Sc. (Hons) in Information Technology & Management</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">University of Moratuwa</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Avg GPA - 3.74</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">2023 - Present</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* University Logo Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <img src="/images/uom.png" alt="University Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('university')}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                          expandedSections.university ? 'rotate-180' : ''
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
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Currently pursuing Bachelor of Science Honours in Information Technology & Management at the University of Moratuwa, 
                  one of Sri Lanka's premier technological universities.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advanced Level Education</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">S Thomas' College Mt Lavinia</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Physical Science Stream</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">2021</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* School Logo Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <img src="/images/stc.png" alt="School Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('school1')}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                          expandedSections.school1 ? 'rotate-180' : ''
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
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Completed secondary education at S Thomas' College Mt Lavinia, one of Sri Lanka's most prestigious educational institutions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Achievements & Activities:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Ordinary Level Education</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">S Thomas' College Mt Lavinia</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Obtained 9 A Grades</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">2018</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* School Logo Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <img src="/images/stc.png" alt="School Logo" className="w-12 h-12" />
                    </div>
                    <button
                      onClick={() => toggleExpansion('school2')}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                          expandedSections.school2 ? 'rotate-180' : ''
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
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Completed secondary education at S Thomas' College Mt Lavinia, one of Sri Lanka's most prestigious educational institutions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Achievements & Activities:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Certifications</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Professional Development</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">2023 - 2024</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleExpansion('certifications')}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                          expandedSections.certifications ? 'rotate-180' : ''
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
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <span className="font-medium text-gray-900 dark:text-white">AWS Certified Developer - SoloLearn</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <span className="font-medium text-gray-900 dark:text-white">React Developer Certification - Codecademy</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <span className="font-medium text-gray-900 dark:text-white">JavaScript Advanced Concepts - Codecademy</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
