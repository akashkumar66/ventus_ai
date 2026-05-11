import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Zap, PieChart, ArrowUpRight } from 'lucide-react';

const Card = ({ icon: Icon, title, description, accentColor, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
    >
      {/* Top Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Bottom Content */}
      <div className="p-10 flex flex-col flex-1">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${accentColor}`}>
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-text-body text-lg leading-relaxed flex-1">{description}</p>
      </div>
    </motion.div>
  );
};

const Capabilities = () => {
  const items = [
    {
      icon: Globe,
      title: "Operate",
      description: "Works inside any desktop app, web portal, or legacy system without needing APIs. Handles MFA and CAPTCHAs automatically.",
      accentColor: "bg-blue-50 text-blue-600",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1400&utm",
    },
    {
      icon: MessageSquare,
      title: "Communicate",
      description: "Talks like a colleague through Slack, Teams, or Email. Proactively flags issues and delivers daily summaries.",
      accentColor: "bg-purple-50 text-purple-600",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1696272440000-0808a203c852?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Zap,
      title: "Learn",
      description: "Adapts to your workflows by following documented SOPs. Continuously improves from your team's feedback.",
      accentColor: "bg-yellow-50 text-yellow-600",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    },
    {
      icon: PieChart,
      title: "Deliver Insights",
      description: "Spots patterns and bottlenecks across your entire operation. Recommends process improvements with real data.",
      accentColor: "bg-green-50 text-green-600",
      delay: 0.4,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <section id="platform" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.1em] uppercase mb-8"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold mb-8"
          >
            Built for the <br /> <span className="text-gradient">messy middle</span> of operations.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-body"
          >
            Most AI fails when it hits a portal, a legacy system, or a phone tree. <br className="hidden md:block" /> Ventus was built specifically for these enterprise edge cases.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Capabilities;
