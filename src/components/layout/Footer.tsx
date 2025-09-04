import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mohammad Mainuddin</h3>
            <p className="text-emerald-100 mb-2">Supervisor - Hotel Management</p>
            <div className="flex items-center space-x-1 text-emerald-100">
              <Heart size={16} className="text-amber-400" />
              <span>Looking for a compatible life partner</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-100">
                <Phone size={16} />
                <span>Contact Number Available</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-100">
                <Mail size={16} />
                <span>Contact Email Available</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <address className="text-emerald-100 not-italic">
              At- Fathan Post +District =Gopalaganj<br />
              Bihar Pin Code ( 841428)
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-emerald-700 text-center text-emerald-100">
          <p>Marriage Biodata &copy; {new Date().getFullYear()} - Mohammad Mainuddin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;