import React from 'react';
import { Download } from 'lucide-react';
import IslamicPattern from '../ui/IslamicPattern';
import AyahDisplay from '../ui/AyahDisplay';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-emerald-50">
      <IslamicPattern opacity={0.05} color="#1D7874" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Enhanced Marriage Biodata text - Made larger and more prominent */}
            <div className="inline-block px-6 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg md:text-xl font-semibold shadow-sm transform hover:scale-105 transition-transform duration-200">
              Marriage Biodata
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800">
              Mohammad Mainuddin
            </h1>
            
            <p className="text-xl text-gray-600">
              Supervisor
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#about" 
                className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200"
              >
                View Profile
              </a>
              
              
            </div>
          </div>
          
          <div className="md:h-96 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
              <AyahDisplay 
                arabicText="وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
                englishText="And among His signs is this: that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
                source="Surah Ar-Rum 30:21"
                className="my-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;