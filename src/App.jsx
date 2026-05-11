import React from 'react';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import WorkflowDemo from './components/WorkflowDemo';
import Capabilities from './components/Capabilities';
import Trust from './components/Trust';
import Backing from './components/Backing';
import UseCases from './components/UseCases';
import Insights from './components/Insights';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useLenis();

  return (
    <div className="relative selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <WorkflowDemo />
        <Capabilities />
        <Trust />
        <Backing />
        <UseCases />
        <Insights />
        <CTA />
      </main>
      <Footer />
      
      {/* Global Grainy Overlay for Premium Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-150 brightness-100 mix-blend-multiply">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

export default App;
