import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, ChevronDown } from 'lucide-react';

const WorkflowStep = ({ number, badge, title, features, linkText, image, isReversed, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center py-24 relative`}
    >
      <div className="lg:w-1/2 space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[10px] font-bold tracking-[0.2em] uppercase">
          {number} · {badge}
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h2>
        
        <div className="space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4 text-text-body">
              <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-black shrink-0">
                <CheckCircle2 size={12} />
              </div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-6">
          <a href="#cta" className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-black/5 hover:border-black transition-all pb-1 group">
            {linkText}
            <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="lg:w-1/2 w-full relative z-10">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] rotate-2 group-hover:rotate-1 transition-transform duration-500" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white shadow-2xl bg-white aspect-[4/3]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkflowDemo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const arrowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      badge: "OPERATE",
      title: "Works Inside Your Systems",
      features: [
        "Operates any platform (desktop, web, or legacy)",
        "Handles MFA, CAPTCHAs & security flows",
        "Makes phone calls to resolve exceptions"
      ],
      linkText: "See a live system walkthrough",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      isReversed: false
    },
    {
      number: "02",
      badge: "COMMUNICATE",
      title: "Talks Like a Colleague",
      features: [
        "Responds in Slack, Teams, or Email",
        "Proactively flags issues & requests help",
        "No portals or dashboards to check"
      ],
      linkText: "Experience the conversation flow",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
      isReversed: true
    },
    {
      number: "03",
      badge: "LEARN",
      title: "Adapts to Your Workflows",
      features: [
        "Follows your documented SOPs",
        "Asks for help on edge cases",
        "Continuously improves from feedback"
      ],
      linkText: "Learn how we train on your SOPs",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      isReversed: false
    },
    {
      number: "04",
      badge: "DELIVER",
      title: "Surfaces Actionable Insights",
      features: [
        "Daily summaries via Email, Slack, or Teams",
        "Identifies root causes & patterns",
        "Recommends process improvements"
      ],
      linkText: "See sample insights reports",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      isReversed: true
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.1em] uppercase mb-8"
          >
            How it Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold mb-8"
          >
            The teammate you've <br /> always <span className="text-gradient">wanted.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-body"
          >
            Ventus isn't just software. It's a proactive member of your team that handles the "messy middle" of enterprise work.
          </motion.p>
        </div>

        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 hidden lg:block">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 to-emerald-500"
            />
            <motion.div 
              style={{ top: arrowY }}
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center z-20"
            >
              <ChevronDown size={16} className="text-blue-500" />
            </motion.div>
          </div>

          {steps.map((step, index) => (
            <WorkflowStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
