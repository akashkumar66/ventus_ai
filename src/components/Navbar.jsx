import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { name: 'Platform', href: '#platform' },
    // { name: 'Solutions', href: '#solutions' },
    // { name: 'Security', href: '#security' },
    // { name: 'Company', href: '#company' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center gap-4 justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' : 'bg-transparent'}`}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/Ventus_Logo.png" alt="Ventus AI" className="h-10 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-body hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="hidden lg:block text-sm font-semibold text-text-body hover:text-black transition-colors mr-4">
              Log in
            </button> */}
            <a href="#cta">
              <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 transition-all group">
                Book a Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
