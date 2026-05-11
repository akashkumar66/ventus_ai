import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

const Trust = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      desc: "Independently audited for security, availability, and confidentiality."
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      desc: "Fully certified for handling PHI and sensitive healthcare data."
    },
    {
      icon: FileText,
      title: "Audit Trails",
      desc: "Complete visibility into every action taken by your AI teammate."
    }
  ];

  return (
    <section id="security" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">Enterprise-grade <span className="text-gradient">by default.</span></h2>
            <p className="text-xl text-text-body mb-12 leading-relaxed">
              Ventus is designed for industries where compliance is non-negotiable. Your AI teammate adheres to the strictest standards to keep your data safe, secure, and private.
            </p>
          </motion.div>

            <div className="space-y-8">
              {securityFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black flex-shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-text-body">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-12 rounded-[3rem] bg-gray-50/50 border-gray-100 relative z-10 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-xl shadow-black/[0.02]">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">End-to-End Encryption</div>
                    <div className="text-xs text-text-body">AES-256 at rest, TLS 1.3 in transit</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-xl shadow-black/[0.02] ml-12">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Role-Based Access</div>
                    <div className="text-xs text-text-body">Granular permissions for every agent</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-xl shadow-black/[0.02] ml-6">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <Lock size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Data Isolation</div>
                    <div className="text-xs text-text-body">Single-tenant architecture available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Certifications */}
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border border-gray-50 z-20">
               <span className="text-[10px] font-black text-center leading-tight">SOC 2 TYPE II CERTIFIED</span>
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border border-gray-50 z-20">
               <span className="text-[10px] font-black text-center leading-tight">HIPAA COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
