import React from 'react';
import Card from '../ui/Card';
import AyahDisplay from '../ui/AyahDisplay';

const PreferredPartner: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-4">Preferred Partner</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Seeking a compatible life partner with similar values and understanding of Islamic principles.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <AyahDisplay 
            arabicText="وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ"
            englishText="And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
            source="Surah Ar-Rum 30:21"
          />
          
          <Card className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Looking For</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Religion</h4>
                      <p className="text-gray-600 text-sm">Muslim (any sect may apply respectfully)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Education</h4>
                      <p className="text-gray-600 text-sm">Emphasizes practical life knowledge and Islamic upbringing.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600 text-sm">India or GCC Countries preferred</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Important Values</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Deen Values</h4>
                      <p className="text-gray-600 text-sm">Practicing, respectful, family-oriented</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Lifestyle</h4>
                      <p className="text-gray-600 text-sm">Halal lifestyle, modest and simple</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Dowry</h4>
                      <p className="text-gray-600 text-sm">Not interested / not demanded</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800">Personal Note</h3>
                <p className="text-amber-700 mt-2">
                  I am looking for a life partner who values Islamic principles and respects family traditions. I believe marriage is a sacred bond that requires mutual respect, understanding, and shared values. I pray that Allah helps us find compatibility and blessing in this journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferredPartner;