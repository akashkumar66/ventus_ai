import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Stethoscope, Truck, Landmark, ShoppingBag, Building2, ArrowRight } from 'lucide-react';

const UseCases = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  const industries = [
    {
      title: "Healthcare RCM",
      desc: "Automate claim statusing, denials resolution, and AR follow-up across 40+ payer portals.",
      icon: Stethoscope,
      stats: "90% Reduction in manual work",
      color: "bg-blue-500",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqUNsdXBxfAEK_VKIE2ZWy7vJIABx_jbD2Y5uu6SERwFoCSnrNrAdiOSUe5l8wwOME1MMgk05S9ib0BA36GbBs3pjChiplA-bdKlk59lLO2HmBv8lH0fF9oRcpAftNsnuShdkXRwY9CkvGQwrCkMCdKKEr6q5dnnFo6P0zTmVaVeW6b-JxXVn4_5sYWY01/s1366/image0_0%20%2812%29.jpg",
    },
    {
      title: "Logistics",
      desc: "Extract data from BOLs, tracking shipments across carrier portals, and automating customs entries.",
      icon: Truck,
      stats: "4x Faster shipment processing",
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Finance & Banking",
      desc: "Automate KYC verification, mortgage processing, and reconciling data across legacy systems.",
      icon: Landmark,
      stats: "99.9% Data entry accuracy",
      color: "bg-purple-500",
      image: "https://tse3.mm.bing.net/th/id/OIP.v2fTT1_HPUDJzFU__6p2aAHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Retail Operations",
      desc: "Manage inventory across multiple platforms, handle vendor invoices, and automate returns processing.",
      icon: ShoppingBag,
      stats: "60% Lower operational costs",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Insurance",
      desc: "Policy issuance automation, claims first notice of loss (FNOL), and underwriting data collection.",
      icon: Building2,
      stats: "24h Response time reduction",
      color: "bg-emerald-500",
      image: "https://th.bing.com/th/id/OIP.Ht9RKRs_hIHyb6EUkQ99ewHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    }
  ];

  return (
    <section ref={targetRef} id="solutions" className="relative lg:h-[300vh] bg-[#FAFAF7]">
      {/* Desktop Horizontal Scroll */}
      <div className="hidden lg:block sticky top-0 h-screen flex flex-col pt-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-2">Purpose-built for <span className="text-gradient">your industry.</span></h2>
            <p className="text-lg text-text-body">Our AI teammates are trained for the unique challenges of your vertical.</p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6">
          {industries.map((industry, index) => (
            <div key={index} className="flex-shrink-0 w-[400px]">
              <div className="group bg-white rounded-[2rem] border border-gray-100 h-[400px] flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
                {/* Top Image - Slides in on hover */}
                <div className="absolute top-0 left-0 w-full h-[50%] overflow-hidden translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0">
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content Area - Moves down on hover */}
                <div className="group relative z-10 flex flex-col h-full w-full p-10 transition-transform duration-500 ease-out group-hover:translate-y-[50%]">
                  <div className={`w-14 h-14 rounded-full ${industry.color} flex items-center justify-center text-white mb-8 group-hover:scale-90 transition-transform duration-500`}>
                    <industry.icon size={28} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:hidden">{industry.title}</h3>
                  <p className="text-lg text-text-body leading-relaxed mb-8 flex-1 group-hover:opacity-0 transition-opacity duration-300">{industry.desc}</p>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-white transition-colors">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Impact Metric</div>
                    <div className="text-xl font-bold text-black">{industry.stats}</div>
                  </div>
                </div>

                {/* Hidden content that reveals on hover in the bottom half */}
                <div className="absolute bottom-0 left-0 w-full h-[50%] p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <p className="text-lg text-text-body leading-relaxed mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-3 text-black font-bold group/link cursor-pointer pointer-events-auto">
                    View case study <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="container mx-auto px-6 mt-20">
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-black origin-left"
            />
          </div>
        </div>
      </div>

      {/* Mobile Vertical List */}
      <div className="lg:hidden py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Purpose-built for <span className="text-gradient">your industry.</span></h2>
          <p className="text-lg text-text-body">Our AI teammates are trained for the unique challenges of your vertical.</p>
        </div>

        <div className="grid gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col">
              <div className={`w-14 h-14 rounded-2xl ${industry.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5`}>
                <industry.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
              <p className="text-text-body mb-8 leading-relaxed">{industry.desc}</p>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 mt-auto">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Impact Metric</div>
                <div className="text-xl font-bold text-black">{industry.stats}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
