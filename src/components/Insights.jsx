import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Activity, TrendingUp, Sparkles, Filter } from 'lucide-react';

const Insights = () => {
  return (
    <section className="py-32 bg-[#F4F6F8] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6">Surfaces actionable <span className="text-gradient">insights.</span></h2>
          <p className="text-xl text-text-body">Ventus doesn't just complete tasks—it spots patterns, identifies bottlenecks, and delivers insights that help leadership make better decisions.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-[3rem] bg-white border-gray-100 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="p-8 border-b border-gray-100 flex flex-wrap items-center justify-between gap-6 bg-gray-50/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Operations Intelligence</h3>
                  <p className="text-xs text-text-body font-medium uppercase tracking-wider">Live System Overview</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 text-sm font-bold shadow-sm hover:bg-gray-50 transition-all">
                  <Filter size={14} />
                  Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white text-sm font-bold shadow-lg hover:opacity-90 transition-all">
                  Export Data
                </button>
              </div>
            </div>

            <div className="p-8 grid lg:grid-cols-3 gap-8">
              {/* Left Column: Metrics */}
              <div className="lg:col-span-1 space-y-6">
                <div className="p-6 rounded-[2rem] bg-blue-50 border border-blue-100/50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <TrendingUp size={20} />
                    </div>
                    <span className="px-2 py-1 bg-green-500 text-white text-[10px] font-black rounded-full">+24%</span>
                  </div>
                  <div className="text-3xl font-bold mb-1">$452,890</div>
                  <div className="text-xs font-bold text-blue-600/70 uppercase tracking-widest">Revenue Impact</div>
                </div>

                <div className="p-6 rounded-[2rem] bg-green-50 border border-green-100/50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-600 shadow-sm">
                      <Activity size={20} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">99.8%</div>
                  <div className="text-xs font-bold text-green-600/70 uppercase tracking-widest">Automation Accuracy</div>
                </div>

                <div className="p-6 rounded-[2rem] bg-purple-50 border border-purple-100/50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                      <Sparkles size={20} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">12,402</div>
                  <div className="text-xs font-bold text-purple-600/70 uppercase tracking-widest">Hours Saved / Month</div>
                </div>
              </div>

              {/* Middle Column: Chart */}
              <div className="lg:col-span-2 space-y-6">
                <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 h-full flex flex-col">
                  <div className="flex justify-between items-end mb-12">
                    <div>
                      <h4 className="text-lg font-bold">Automation Performance</h4>
                      <p className="text-sm text-text-body">Daily tasks completed by AI agents</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-bold text-gray-400">SUCCESS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                        <span className="text-[10px] font-bold text-gray-400">MANUAL</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-end justify-between gap-4 pb-4 min-h-[300px] bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 relative overflow-hidden">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                      <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>

                    {[40, 65, 45, 90, 75, 85, 95].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end relative z-10">
                        <div className="w-full relative group h-full flex items-end">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                            className="w-full bg-blue-500 rounded-t-xl relative z-20 shadow-lg shadow-blue-500/20"
                          />
                          <div className="absolute inset-0 bg-blue-100/20 rounded-t-xl" />
                          
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 whitespace-nowrap z-30 shadow-xl">
                            {height * 12} tasks
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Day {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendation Panel */}
            <div className="m-4 md:m-8 mt-0 p-6 rounded-3xl bg-black text-white flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 group">
              <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center text-center md:text-left gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                  <Sparkles size={28} />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">AI Recommendation</div>
                  <p className="text-base md:text-lg font-medium leading-relaxed">
                    “Increasing denial follow-up frequency for <span className="text-blue-400">UnitedHealthcare</span> could recover an additional <span className="text-blue-400">$12,400</span> this month.”
                  </p>
                </div>
              </div>
              <button className="w-full lg:w-auto px-6 py-3 rounded-xl bg-white text-black font-bold text-sm shrink-0 hover:bg-blue-50 transition-colors">
                Apply Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
