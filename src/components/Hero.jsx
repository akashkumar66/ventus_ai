import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://static.vecteezy.com/system/resources/previews/036/488/417/large_2x/ai-generated-robot-hand-isolated-on-transparent-background-clipping-path-png.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 second delay
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = containerRef.current.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      gsap.to(glowRef.current, {
        x: x - 300,
        y: y - 300,
        duration: 1.2,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden flex flex-col items-center justify-center text-center bg-[#FAFAF7]">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentImage]}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Lighter overlay to keep text readable but images visible */}
        <div className="absolute inset-0 z-10" />
      </div>

      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-peach-100/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.1em] uppercase mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Next-Gen Enterprise AI
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-black max-w-5xl">
            Hire Ventus<br /> Your AI Teammate
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium">
            AI that operates, communicates, learns, and delivers powering <br className="hidden md:block" />  <span className="text-black font-bold">  Dental RCM, Medical RCM, and more.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 w-full sm:w-auto px-4 sm:px-0">
            <a href="#cta" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10 group">
                Meet Your AI Teammate
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg text-black bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play size={12} fill="black" />
                </div>
                See How It Works
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Follower */}
      <div
        ref={glowRef}
        className="fixed w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px] pointer-events-none z-1"
      />
    </section>
  );
};

export default Hero;
