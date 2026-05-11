import React from 'react';
import { Twitter, Linkedin, Github, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const links = {
    Product: ['Platform', 'Healthcare RCM', 'Logistics', 'Security', 'Integrations'],
    Resources: ['Documentation', 'Blog', 'Case Studies', 'ROI Calculator', 'Glossary'],
    Company: ['About', 'Careers', 'Privacy Policy', 'MSA', 'DPA'],
  };

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img src="/Ventus_Logo.png" alt="Ventus AI" className="h-10 w-auto" />
            </div>
            <p className="text-text-body mb-8 leading-relaxed">
              Automating the messy middle of enterprise operations with intelligent AI teammates.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-text-body hover:bg-black hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-sm font-bold text-black uppercase tracking-widest mb-8">{title}</h4>
              <ul className="space-y-4">
                {items.map((link) => (
                  <li key={link}>
                    <a className="text-text-body hover:text-black transition-colors flex items-center justify-between group">
                      {link}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-sm text-text-body">
              © {new Date().getFullYear()} Ventus AI Inc. Built for the future of work.
            </p>
            
            {/* Credit Section */}
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-gray-200 bg-gray-50/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto invert brightness-0"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
              <div className="h-3 w-px bg-gray-200 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto invert brightness-0"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <a className="text-sm text-text-body hover:text-black transition-colors cursor-pointer">Terms of Service</a>
            <a className="text-sm text-text-body hover:text-black transition-colors cursor-pointer">Privacy Policy</a>
            <a className="text-sm text-text-body hover:text-black transition-colors cursor-pointer">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
