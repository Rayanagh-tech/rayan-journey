
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "IT Department Intern",
    company: "Leoni",
    period: "July 2024 - August 2024",
    description: [
      "Network administration: configuration, maintenance, and security",
      "Virtual server management: installation and optimization",
      "Storage and data: setup and backup implementation",
      "Installation and deployment of new equipment"
    ],
    icon: <Briefcase className="h-5 w-5 text-white" />
  },
  {
    title: "Applied Data Science Intern",
    company: "WorldQuant University",
    period: "June 2024 - September 2024",
    description: [
      "Completion of 8 data science projects (air quality, earthquake damage analysis, etc.)",
      "Exploration and application of machine learning models: Linear Regression, Logistic Regression, Random Forests, K-Means Clustering",
      "Time Series analysis for predictions and temporal analysis",
      "Development of ETL pipelines for data extraction, transformation, and loading"
    ],
    icon: <Calendar className="h-5 w-5 text-white" />
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-2 flex items-center">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full cloud-gradient mr-3">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
              </div>
              
              <div className="ml-11">
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
