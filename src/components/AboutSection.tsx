
import React from 'react';
import { BookOpen, Calendar, MapPin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As a second-year student in Telecommunications and Networks at the National Engineering School of Tunis, 
              I am deeply passionate about cloud computing, DevOps practices, and MLOps methodologies. 
              I am currently expanding my skills in these domains, combining academic knowledge with 
              practical experience through projects and internships.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              My journey began with a solid foundation in mathematics and physics during my preparatory cycle, 
              where I developed strong analytical abilities and time management skills. Now, I'm applying this 
              foundation to master complex technical concepts in networks, telecommunications, and software development.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              I'm motivated by a desire to solve complex problems and contribute to innovative projects. 
              Currently seeking a summer internship opportunity in Tunis as a DevOps or Cloud Engineer 
              to apply my knowledge, enhance my skills, and make meaningful contributions to the field.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-gray-700">Born: 2002</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-700">Location: Tunis, Tunisia</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-gray-700">Degree: Engineering Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-700">Email: rayan.gharbi@etudiant-enit.utm.tn</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 cloud-text-gradient">Education</h3>
            <div className="space-y-4">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800">École Nationale d'Ingénieurs de Tunis</h4>
                  <p className="text-sm text-gray-500">Sept 2023 – Sept 2026</p>
                  <p className="mt-2 text-gray-700">Engineering Cycle, Networks and Telecommunications</p>
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Networks and telecoms: CCNA 1 & 2</li>
                    <li>Signal and image processing</li>
                    <li>Software development: C, C#, .NET, MATLAB</li>
                    <li>Linux systems and administration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800">Institut Préparatoire aux Études d'Ingénieurs de Monastir</h4>
                  <p className="text-sm text-gray-500">Sept 2021 – June 2023</p>
                  <p className="mt-2 text-gray-700">Preparatory Cycle, Mathematics-Physics — Rank: 398/1700</p>
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Advanced mathematics, analysis and statistics</li>
                    <li>Analytical rigor and time management</li>
                    <li>Introduction to Python and SQL</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
