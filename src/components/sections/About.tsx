import React from 'react';
import Card from '../ui/Card';
import { CalendarDays, Languages, BookOpen, Briefcase, Ruler, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">About Me</h2>
          
          <Card className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Full Name</h3>
                    <p className="font-medium">Sajroddin Ahmad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CalendarDays className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Date of Birth</h3>
                    <p className="font-medium">02/08/1998</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Ruler className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Height / Complexion</h3>
                    <p className="font-medium">5'5" / Fair</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-emerald-700 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <h3 className="text-gray-500 text-sm">Religion</h3>
                    <p className="font-medium">Muslim (Sheikh - Siddique)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Languages className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Languages Known</h3>
                    <p className="font-medium">Urdu, Arabic, English & Hindi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Qualification</h3>
                    <p className="font-medium">Intermediate Passed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-emerald-700 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="10" r="3"/>
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Hobbies</h3>
                    <p className="font-medium">Playing Cricket & Reading</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Briefcase className="text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-500 text-sm">Profession</h3>
                    <p className="font-medium">Transport Technician – Heavy Machinery (GCC, Gulf)</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Islamic Lifestyle</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/>
                    <path d="M10 16.5V14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1.5"/>
                    <path d="M12 12V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-6"/>
                    <path d="M18 22V12"/>
                    <path d="M10 8a2 2 0 1 1 4 0v4"/>
                    <path d="M15 22H6a2 2 0 0 1-2-2V7"/>
                  </svg>
                </div>
                <span className="font-medium">Practicing 5 daily prayers</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 16V4a2 2 0 0 1 2-2h11"/>
                    <path d="M5 14H4a2 2 0 1 0 0 4h1"/>
                    <path d="M22 18H11a2 2 0 1 0 0 4h11V6a2 2 0 1 0-4 0v7"/>
                  </svg>
                </div>
                <span className="font-medium">Qur'an recitation with Tajweed</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 15V9"/>
                    <path d="M5 15V9"/>
                    <path d="M12 4V20"/>
                    <path d="M3.5 6.5A3.5 3.5 0 0 1 7 3h10a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5h-10A3.5 3.5 0 0 1 3.5 7.5v-1Z"/>
                    <path d="M3.5 13.5A3.5 3.5 0 0 0 7 17h10a3.5 3.5 0 0 0 3.5-3.5v-1a3.5 3.5 0 0 0-3.5-3.5"/>
                  </svg>
                </div>
                <span className="font-medium">Maintains Halal lifestyle</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <path d="M9 9h.01"/>
                    <path d="M15 9h.01"/>
                  </svg>
                </div>
                <span className="font-medium">Traditional family values</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;