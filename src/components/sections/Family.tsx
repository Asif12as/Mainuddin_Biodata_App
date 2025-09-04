import React from 'react';
import Card from '../ui/Card';
import IslamicPattern from '../ui/IslamicPattern';

const Family: React.FC = () => {
  return (
    <section id="family" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <IslamicPattern opacity={0.03} color="#1D7874" />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-200/20 to-blue-200/20 rounded-full translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4">👨‍👩‍👧‍👦 Family Background</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-emerald-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <path d="M20 8v6M23 11v-2a4 4 0 0 0-3-3.87M1 21v-2a4 4 0 0 1 3-3.87"></path>
                </svg>
              </div>
              Parents & Grandparents
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-white to-purple-50 rounded-lg sm:rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <p className="text-purple-700 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1 sm:mb-2">Grand Father's Name</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👴 (Late) Mohammad Khalid</p>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-white to-blue-50 rounded-lg sm:rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <p className="text-blue-700 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1 sm:mb-2">Father's Name</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👨 Md imam Hasan</p>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-white to-pink-50 rounded-lg sm:rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                  <p className="text-pink-700 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1 sm:mb-2">Mother's Name</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👩 Mrs. Amina Khatoon</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 p-8 rounded-2xl border-2 border-emerald-200 shadow-xl">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <p className="text-emerald-800 font-bold text-xl leading-relaxed">🏡 Respected Family from<br/>Gopalganj, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-12 translate-x-12"></div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <path d="M20 8v6M23 11v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                👨‍👦 Brothers
              </h3>
              
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 relative z-10">
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-green-50 rounded-lg sm:rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">1</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👨 Sajroddin Ahmad | Brother</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-indigo-50 rounded-lg sm:rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">2</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👨 Md. Shahabuddin | HSE Co-ordinator in Qatar</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-purple-50 rounded-lg sm:rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">3</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👨 Md. Azharuddin | Aalim-E-Deen</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-teal-50 rounded-lg sm:rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">4</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">💙 Brother (Unmarried)</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-pink-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full -translate-y-12 translate-x-12"></div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-700 to-rose-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <path d="M20 8v6M23 11v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                👩‍👧 Sisters
              </h3>
              
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 relative z-10">
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-pink-50 rounded-lg sm:rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">1</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👩 Aminun Nesha (Married)</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-rose-50 rounded-lg sm:rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">2</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👩 Rehana Khatoon (Married)</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-purple-50 rounded-lg sm:rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">3</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👩 Sabra Khatoon (Married)</p>
                </li>
                
                <li className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-fuchsia-50 rounded-lg sm:rounded-xl shadow-lg border border-fuchsia-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0">4</div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg">👩 Ruhi Khatoon (Married)</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border-l-4 sm:border-l-6 lg:border-l-8 border-gradient-to-b from-amber-500 to-orange-500 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-200/20 to-amber-200/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="flex gap-3 sm:gap-4 lg:gap-6 items-start relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m4.9 4.9 1.4 1.4"/>
                  <path d="m17.7 17.7 1.4 1.4"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="m6.3 17.7-1.4 1.4"/>
                  <path d="m19.1 4.9-1.4 1.4"/>
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-3 sm:mb-4 flex items-center gap-2">
                  ✨ Family Values
                </h3>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                  Our family upholds traditional Islamic values with a focus on respect, education, and community service. We believe in strong family bonds and supporting each other through life's journey. 🤝💖
                </p>
                
                {/* Value highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-amber-100">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🕌</div>
                      <p className="font-semibold text-amber-800">Islamic Values</p>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-orange-100">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="font-semibold text-orange-800">Education Focus</p>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-yellow-100">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🤝</div>
                      <p className="font-semibold text-yellow-800">Unity & Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
