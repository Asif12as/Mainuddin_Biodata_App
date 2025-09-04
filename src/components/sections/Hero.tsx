import React from 'react';
import { Download } from 'lucide-react';
import IslamicPattern from '../ui/IslamicPattern';
import AyahDisplay from '../ui/AyahDisplay';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <IslamicPattern opacity={0.08} color="#1D7874" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Enhanced Marriage Biodata text - Made larger and more prominent */}
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-lg md:text-xl font-semibold shadow-lg border border-emerald-200 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              ✨ Marriage Biodata ✨
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 bg-clip-text text-transparent leading-tight">
              Mohammad Mainuddin
            </h1>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Supervisor - Hotel Management
              </p>
              <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#about" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 flex items-center space-x-2"
              >
                <span>👤 View Profile</span>
              </a>
              <a 
                href="#contact" 
                className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300 flex items-center space-x-2"
              >
                <span>📞 Contact</span>
              </a>
            </div>
          </div>
          
          <div className="md:h-96 flex items-center justify-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce animation-delay-1000"></div>
            
            <div className="bg-gradient-to-br from-white via-gray-50 to-emerald-50 p-8 rounded-2xl shadow-2xl max-w-md transform md:rotate-2 hover:rotate-0 transition-all duration-500 border border-emerald-100 hover:shadow-3xl backdrop-blur-sm">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
              
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