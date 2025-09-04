import React from 'react';
import Card from '../ui/Card';
import { CalendarDays, Languages, BookOpen, Briefcase, Ruler, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-semibold mb-4 shadow-lg border border-emerald-200">
              ✨ Personal Information ✨
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 bg-clip-text text-transparent mb-4">About Me</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Get to know more about my personal details, qualifications, and Islamic lifestyle</p>
          </div>
          
          <div className="bg-gradient-to-br from-white via-gray-50 to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-10 mb-12 border border-emerald-100 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-emerald-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <User className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-emerald-700 text-sm font-semibold uppercase tracking-wide">Full Name</h3>
                    <p className="font-bold text-gray-800 text-lg">Mohammad Mainuddin</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-teal-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-teal-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <CalendarDays className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-teal-700 text-sm font-semibold uppercase tracking-wide">Date of Birth / Age</h3>
                    <p className="font-bold text-gray-800 text-lg">15 May 1991 / 33 years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-cyan-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cyan-700 text-sm font-semibold uppercase tracking-wide">Marital Status</h3>
                    <p className="font-bold text-gray-800 text-lg">💍 Unmarried</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Weight</h3>
                    <p className="font-bold text-gray-800 text-lg">⚖️ 75 Kgs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Ruler className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-indigo-700 text-sm font-semibold uppercase tracking-wide">Height / Complexion</h3>
                    <p className="font-bold text-gray-800 text-lg">📏 5'7" / White</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                      <path d="M2 12h2"/>
                      <path d="M20 12h2"/>
                      <path d="M12 2v2"/>
                      <path d="M12 20v2"/>
                      <path d="m17.5 6.5-1.5 1.5"/>
                      <path d="m6.5 17.5 1.5-1.5"/>
                      <path d="m6.5 6.5 1.5 1.5"/>
                      <path d="m17.5 17.5-1.5-1.5"/>
                      <path d="M12 7v5l3 3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Religion</h3>
                    <p className="font-bold text-gray-800 text-lg">☪️ Muslim (Sheikh)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-teal-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-teal-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Languages className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-teal-700 text-sm font-semibold uppercase tracking-wide">Languages Known</h3>
                    <p className="font-bold text-gray-800 text-lg">🗣️ Urdu, Arabic, English & Hindi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-orange-700 text-sm font-semibold uppercase tracking-wide">Education</h3>
                    <p className="font-bold text-gray-800 text-lg">🎓 12th Intermediate</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-yellow-700 text-sm font-semibold uppercase tracking-wide">Technical Qualification</h3>
                    <p className="font-bold text-gray-800 text-lg">🏨 Hotel Management</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-red-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-red-700 text-sm font-semibold uppercase tracking-wide">Blood Group</h3>
                    <p className="font-bold text-gray-800 text-lg">🩸 O Positive</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-pink-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="10" r="3"/>
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pink-700 text-sm font-semibold uppercase tracking-wide">Hobbies</h3>
                    <p className="font-bold text-gray-800 text-lg">🏏 Playing Cricket & Reading</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-slate-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-700 text-sm font-semibold uppercase tracking-wide">Profession</h3>
                    <p className="font-bold text-gray-800 text-lg">💼 Supervisor - Hotel Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-2xl p-8 border border-emerald-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-200/20 to-emerald-200/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent mb-8 flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m17.5 6.5-1.5 1.5"/>
                  <path d="m6.5 17.5 1.5-1.5"/>
                  <path d="m6.5 6.5 1.5 1.5"/>
                  <path d="m17.5 17.5-1.5-1.5"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
              </div>
              ☪️ Islamic Lifestyle
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex items-center gap-4 bg-gradient-to-r from-white to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/>
                    <path d="M10 16.5V14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1.5"/>
                    <path d="M12 12V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-6"/>
                    <path d="M18 22V12"/>
                    <path d="M10 8a2 2 0 1 1 4 0v4"/>
                    <path d="M15 22H6a2 2 0 0 1-2-2V7"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">🕌 Practicing 5 daily prayers</span>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-r from-white to-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 16V4a2 2 0 0 1 2-2h11"/>
                    <path d="M5 14H4a2 2 0 1 0 0 4h1"/>
                    <path d="M22 18H11a2 2 0 1 0 0 4h11V6a2 2 0 1 0-4 0v7"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">📖 Qur'an recitation with Tajweed</span>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-r from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M19 15V9"/>
                    <path d="M5 15V9"/>
                    <path d="M12 4V20"/>
                    <path d="M3.5 6.5A3.5 3.5 0 0 1 7 3h10a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5h-10A3.5 3.5 0 0 1 3.5 7.5v-1Z"/>
                    <path d="M3.5 13.5A3.5 3.5 0 0 0 7 17h10a3.5 3.5 0 0 0 3.5-3.5v-1a3.5 3.5 0 0 0-3.5-3.5"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">✨ Maintains Halal lifestyle</span>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <path d="M9 9h.01"/>
                    <path d="M15 9h.01"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">👨‍👩‍👧‍👦 Traditional family values</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;