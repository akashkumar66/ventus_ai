import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Mail, CheckCircle2, Globe, X } from 'lucide-react';

const CTA = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', industry: '' });
  const [error, setError] = useState('');

  const handleDiscoveryCall = (e) => {
    e?.preventDefault();
    if (!formData.name || !formData.email || !formData.industry) {
      setError('Please fill in all fields to proceed.');
      return;
    }
    setError('');
    setShowSuccess(true);
    // Auto close after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({ name: '', email: '', industry: '' });
  };

  return (
    <section id='cta' className="py-32 bg-[#FAFAF7] relative overflow-hidden">
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-emerald-500 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
              <p className="text-text-body text-lg mb-8">
                Your AI strategist will contact you within 24 hours to schedule your discovery call.
              </p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all"
              >
                Done
              </button>
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Background Mesh Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-200/50 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-200/50 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.2, y: -150, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.5, 
            type: "spring", 
            stiffness: 50, 
            damping: 15,
            mass: 1
          }}
          style={{ perspective: "2000px", transformOrigin: "center top" }}
          className="glass-card rounded-[2.5rem] lg:rounded-[4rem] bg-white border-white/50 shadow-2xl p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Hire your first <span className="text-gradient">AI teammate.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-body mb-8 md:mb-12 max-w-lg mx-auto lg:mx-0">
              Join hundreds of enterprise companies who have automated their most tedious operations with Ventus.
            </p>

            <div className="space-y-4 md:space-y-6">
              {["Deployment in < 7 Days", "SOC 2 Type II & HIPAA Certified", "No-API Integration Required"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-sm md:text-base text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gray-50/50 border border-white shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                <Globe size={120} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Schedule a personalized demo</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-gray-100 focus:border-blue-500 focus:outline-none transition-colors font-medium text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Work Email</label>
                      <input
                        type="email"
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-gray-100 focus:border-blue-500 focus:outline-none transition-colors font-medium text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Industry</label>
                    <select 
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-gray-100 focus:border-blue-500 focus:outline-none transition-colors font-medium appearance-none text-sm md:text-base"
                    >
                      <option value="">Select Industry</option>
                      <option value="Healthcare RCM">Healthcare RCM</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Finance">Finance</option>
                      <option value="Retail">Retail</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs md:text-sm font-bold text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button 
                  onClick={handleDiscoveryCall}
                  className="w-full py-4 md:py-5 bg-black text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all shadow-xl shadow-black/10 group"
                >
                  Book Discovery Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                  <p className="text-center text-[9px] text-text-body font-medium uppercase tracking-[0.2em] mt-4 md:mt-6 opacity-60">
                    Trusted by 500+ global enterprises
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
