import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Rocket, CheckCircle2 } from 'lucide-react';

const Step = ({ number, title, description, items, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative flex gap-12 pb-24 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-xl font-bold shadow-lg z-10">
          {number}
        </div>
        <div className="flex-1 w-[2px] bg-gradient-to-b from-gray-200 to-transparent mt-4" />
      </div>
      
      <div className="pt-2">
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <p className="text-xl text-text-body mb-8 max-w-xl leading-relaxed">{description}</p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-black bg-white/50 p-4 rounded-xl border border-white">
              <CheckCircle2 size={18} className="text-blue-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  
  const steps = [
    {
      number: "01",
      title: "Discover & Map",
      description: "We identify high-impact workflows and map your systems, portals, and edge cases. No engineering required on your part.",
      items: ["Process Discovery", "Workflow Mapping", "Edge Case Identification", "System Access Setup"]
    },
    {
      number: "02",
      title: "Train & Validate",
      description: "We configure your AI teammate in your environment using your SOPs and test with real-world scenarios to ensure 99%+ accuracy.",
      items: ["SOP Ingestion", "AI Training", "Accuracy Validation", "UAT Testing"]
    },
    {
      number: "03",
      title: "Deploy & Scale",
      description: "Roll out to production in under 7 days. Your AI teammate gets smarter with every task, ready to scale across your entire operation.",
      items: ["Production Rollout", "Continuous Learning", "Performance Dashboards", "Workflow Expansion"]
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#FAFAF7] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
                Deployment Process
              </div>
              <h2 className="text-6xl font-bold mb-8">Deploy in <span className="text-gradient">days,</span> not months.</h2>
              <p className="text-xl text-text-body leading-relaxed max-w-md">
                Unlike traditional automation projects that take months of integration, Ventus works inside your existing systems today.
              </p>
              
              <div className="mt-12 p-8 rounded-[2rem] bg-black text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2">7 Days</div>
                  <div className="text-gray-400 font-medium">Average time to first deployment</div>
                </div>
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          <div ref={containerRef} className="relative">
            {steps.map((step, index) => (
              <Step key={index} {...step} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
