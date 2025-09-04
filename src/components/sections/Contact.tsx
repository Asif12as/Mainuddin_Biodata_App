import React from 'react';
import Card from '../ui/Card';
import { Phone, Mail, MapPin, Send, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-200/20 to-emerald-200/20 rounded-full translate-x-40 translate-y-40"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-100/10 to-emerald-100/10 rounded-full -translate-x-32 -translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            📞 Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to know more about Mohammad Mainuddin
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-2xl p-8 border border-emerald-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200/15 to-emerald-200/15 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                💬 Get In Touch
              </h3>
              
              <div className="space-y-8">
              {/* Home Phone Number */}
               <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                 <div className="flex items-start gap-5">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0">
                     <Phone size={24} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-emerald-800 mb-2 flex items-center gap-2">
                       🏠 Home Phone
                     </h4>
                     <p className="text-emerald-700 text-lg font-semibold">
                       <a href="tel:+917870331601" className="hover:text-emerald-900 transition-colors duration-200 hover:underline">+91 7870331601</a>
                     </p>
                   </div>
                 </div>
               </div>
              
              {/* Personal Phone Number - Added as requested */}
               <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                 <div className="flex items-start gap-5">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                     <Smartphone size={24} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-teal-800 mb-2 flex items-center gap-2">
                       📱 Personal Phone (WhatsApp Only)
                     </h4>
                     <p className="text-teal-700 text-lg font-semibold">
                       <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Contact Number Available</span>
                     </p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                 <div className="flex items-start gap-5">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                     <Mail size={24} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-cyan-800 mb-2 flex items-center gap-2">
                       ✉️ Email Address
                     </h4>
                     <p className="text-cyan-700 text-lg font-semibold">
                       <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Contact Email Available</span>
                     </p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                 <div className="flex items-start gap-5">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 flex items-center justify-center shadow-lg flex-shrink-0">
                     <MapPin size={24} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-emerald-800 mb-2 flex items-center gap-2">
                       📍 Address
                     </h4>
                     <p className="text-gray-700 text-lg leading-relaxed">
                       <span className="font-semibold">At- Fathan Post + District = Gopalganj</span><br />
                       <span className="text-emerald-700 font-semibold">Bihar Pin Code (841428)</span>
                     </p>
                   </div>
                 </div>
               </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                 <a 
                   href="https://wa.me/+919955225448" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                     <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                     <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
                     <path d="M8.5 13.5a5 5 0 0 0 7 0"/>
                   </svg>
                   💬 WhatsApp
                 </a>
                 
                 <a 
                   href="tel:+919123132225" 
                   className="w-full sm:w-auto bg-white border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-xl hover:bg-emerald-50 hover:border-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
                 >
                   <Phone size={24} />
                   📞 Call Now
                 </a>
               </div>
             </div>
           </div>
           
           <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-2xl shadow-2xl p-8 border border-cyan-100 relative overflow-hidden">
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/15 to-cyan-200/15 rounded-full translate-y-12 -translate-x-12"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                 ✉️ Send Message
               </h3>
               
               <form className="space-y-6">
              <div className="space-y-2">
                 <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                   👤 Your Name
                 </label>
                 <input 
                   type="text" 
                   id="name" 
                   className="w-full px-6 py-4 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all duration-300 text-lg bg-white/80 shadow-md hover:shadow-lg"
                   placeholder="Enter your full name"
                 />
               </div>
               
               <div className="space-y-2">
                 <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                   📧 Your Email
                 </label>
                 <input 
                   type="email" 
                   id="email" 
                   className="w-full px-6 py-4 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all duration-300 text-lg bg-white/80 shadow-md hover:shadow-lg"
                   placeholder="Enter your email address"
                 />
               </div>
               
               <div className="space-y-2">
                 <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                   💬 Message
                 </label>
                 <textarea 
                   id="message" 
                   rows={5} 
                   className="w-full px-6 py-4 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all duration-300 text-lg bg-white/80 shadow-md hover:shadow-lg resize-none"
                   placeholder="Type your message here..."
                 ></textarea>
               </div>
               
               <button 
                 type="submit" 
                 className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg mt-8"
               >
                 <Send size={24} />
                 🚀 Send Message
               </button>
             </form>
            </div>
          </div>
         </div>
       </div>
     </div>
    </section>
  );
};

export default Contact;