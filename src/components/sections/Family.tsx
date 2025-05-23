import React from 'react';
import Card from '../ui/Card';
import IslamicPattern from '../ui/IslamicPattern';

const Family: React.FC = () => {
  return (
    <section id="family" className="py-16 bg-emerald-50 relative">
      <IslamicPattern opacity={0.03} color="#1D7874" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Family Background</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Parents & Grandparents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Grand Father's Name</p>
                  <p className="font-medium">Late Mohammad Khalil Miyan</p>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm">Father's Name</p>
                  <p className="font-medium">Imam Hassan</p>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm">Mother's Name</p>
                  <p className="font-medium">Mrs. Amina Khatoon</p>
                </div>
              </div>
              
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <p className="text-emerald-800 font-medium">Respected Family from Gopalganj, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-emerald-800 mb-6">Brothers</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">1</div>
                  <p className="font-medium">Md. Mainuddin | Supervisor @Blu Radisson</p>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">2</div>
                  <p className="font-medium">Md. Shahabuddin | HSE Co-ordinator in Qatar</p>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">3</div>
                  <p className="font-medium">Md. Azharuddin | Aalim-E-Deen</p>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-emerald-800 mb-6">Sisters</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">1</div>
                  <p className="font-medium">Aminun Nesha (Married)</p>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">2</div>
                  <p className="font-medium">Rehana Khatoon (Married)</p>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">3</div>
                  <p className="font-medium">Sabra Khatoon (Married)</p>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">4</div>
                  <p className="font-medium">Ruhi Khatoon (Married)</p>
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="border-l-4 border-amber-500">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <h3 className="font-semibold text-lg text-amber-700">Family Values</h3>
                <p className="text-gray-600 mt-2">Our family upholds traditional Islamic values with a focus on respect, education, and community service. We believe in strong family bonds and supporting each other through life's journey.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Family;
