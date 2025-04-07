import React from 'react';
import { ArrowDown, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-400 via-purple-500 to-indigo-600 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg md:text-xl font-medium text-gray-500">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Rayan Gharbi
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-700">
              Cloud & DevOps Engineer
            </h3>
            <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
              Second-year Telecommunications and Networks student at the National Engineering School of Tunis, 
              passionate about cloud computing, DevOps, and MLOps.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={handleResumeClick}
              >
                <Briefcase size={18} />
                <span>View Resume</span>
              </Button>
              <Button 
                className="gap-2 px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={handleContactClick}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
  <div className="relative h-96 w-96 rounded-full flex items-center justify-center">
    {/* Outer glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 blur-2xl opacity-70 animate-pulse-slow"></div>

    {/* Profile Image Frame */}
    <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl h-96 w-96">
      <img
        src="/profile.jpg"
        alt="Rayan Gharbi"
        className="object-cover h-full w-full"
      />
    </div>
  </div>
</div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 