import React from 'react';
import Card from '../ui/Card';
import { Phone, Mail, MapPin, Send, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Contact Information</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* Home Phone Number */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Home Phone</h4>
                  <p className="text-emerald-700 mt-1">
                    <a href="tel:+917870331601" className="hover:underline">+91 7870331601</a>
                  </p>
                </div>
              </div>
              
              {/* Personal Phone Number - Added as requested */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                  <Smartphone size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Personal Phone (Only Whatsapp)</h4>
                  <p className="text-emerald-700 mt-1">
                    <a href="tel:+919123132225" className="hover:underline">+91 9123132225</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email Address</h4>
                  <p className="text-emerald-700 mt-1">
                    <a href="mailto:Ssajroddin@gmail.com" className="hover:underline">Ssajroddin@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600 mt-1">
                    At.- Fataha<br />
                    Po + Ps. - Gopalganj<br />
                    Distt. - Gopalganj (Bihar)
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-8">
                <a 
                  href="https://wa.me/+919123132225" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                    <path d="M8.5 13.5a5 5 0 0 0 7 0"/>
                  </svg>
                  WhatsApp
                </a>
                
                <a 
                  href="tel:+919123132225" 
                  className="bg-white border border-emerald-700 text-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-50 transition-colors duration-200 flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call
                </a>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Send Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200 flex items-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;