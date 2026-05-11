import React from 'react';
import { motion } from 'framer-motion';

const Backing = () => {
  const investors = [
    { name: 'Andreessen Horowitz', logo: 'https://th.bing.com/th/id/OIP.idu_PJXTmEo8Knn2UmVLZQHaDT?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Samsung Next', logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/pjzulvo6jwqcibjpwler' },
    { name: 'WndrCo', logo: 'https://assets.website-files.com/619c01ae3cf18fa1e2926bdb/619c01ae3cf18f0155926c92_wndr-co-horizontal-logo-color-rgb%402x.png' },
  ];

  const teamFrom = [
    { name: 'Meta', logo: 'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png' },
    { name: 'Amazon', logo: 'https://toppng.com/uploads/preview/amazon-logo-png-amazon-logo-transparent-11563090659nn2isevb5y.png' },
    { name: 'UC Berkeley', logo: 'https://th.bing.com/th/id/OIP.0qboEgakrsOCELPD11TwWAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Carnegie Mellon', logo: 'https://tse4.mm.bing.net/th/id/OIP.22c303QVJQY56oFFkH0yhAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Investors Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFAF7] rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 flex flex-col items-center text-center overflow-hidden"
          >
            <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-10">
              Backed by world-class investors
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full">
              {investors.map((item, i) => (
                <div key={i} className="flex items-center justify-center h-6 md:h-8 lg:h-10 min-w-[80px]">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FAFAF7] rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 flex flex-col items-center text-center overflow-hidden"
          >
            <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-10">
              Built by the best team
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full">
              {teamFrom.map((item, i) => (
                <div key={i} className="flex items-center justify-center h-6 md:h-8 lg:h-10 min-w-[80px]">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Backing;
