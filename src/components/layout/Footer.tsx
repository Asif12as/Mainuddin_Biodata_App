import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 text-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-700/20 to-teal-700/20 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-700/20 to-cyan-700/20 rounded-full translate-x-40 translate-y-40"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full -translate-x-32 -translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent flex items-center gap-2">
              👤 Mohammad Mainuddin
            </h3>
            <p className="text-emerald-100 mb-4 text-lg font-medium flex items-center gap-2">
              💼 Supervisor - Hotel Management
            </p>
            <div className="flex items-center space-x-2 text-emerald-100 bg-white/10 p-3 rounded-xl">
              <Heart size={20} className="text-amber-400 animate-pulse" />
              <span className="font-medium">Looking for a compatible life partner</span>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent flex items-center gap-2">
              📞 Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-100 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="font-medium text-lg">Contact Number Available</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-100 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="font-medium text-lg">Contact Email Available</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent flex items-center gap-2">
              📍 Address
            </h3>
            <div className="bg-white/10 p-4 rounded-xl">
              <address className="text-emerald-100 not-italic text-lg leading-relaxed">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-amber-400">🏠</span>
                  <span className="font-medium">At- Fathan Post + District = Gopalganj</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">📮</span>
                  <span className="font-medium text-cyan-100">Bihar Pin Code (841428)</span>
                </div>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">©</span>
                </div>
                <p className="text-emerald-100 text-lg font-medium">
                  2024 Mohammad Mainuddin. All rights reserved.
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-emerald-200">
                <span className="text-amber-400">✨</span>
                <span className="text-sm font-medium">Created with love for finding the perfect life partner</span>
                <span className="text-amber-400">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;