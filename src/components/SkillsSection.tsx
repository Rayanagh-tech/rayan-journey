
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Terminal, Cloud, Database, Server } from 'lucide-react';

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      { name: "C/C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "C#", level: 75 },
      { name: "SQL/NoSQL", level: 80 }
    ]
  },
  {
    name: "Cloud & DevOps Technologies",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Docker/Kubernetes", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 75 }
    ]
  },
  {
    name: "Data Technologies",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Apache Spark", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "ETL Pipelines", level: 80 }
    ]
  },
  {
    name: "Systems & Infrastructure",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Linux", level: 90 },
      { name: "Networking (CCNA)", level: 85 },
      { name: "Apache Kafka", level: 70 },
      { name: "Apache Airflow", level: 75 }
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="progress-bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 gap-3">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 cloud-text-gradient">
            Additional Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              ".NET", "OpenCV", "Power BI/Dash", "Kafka/Zookeeper", 
              "Cassandra", "DVC", "Flask", "FastAPI", "MATLAB", "Machine Learning"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary transition-all"
              >
                <span className="text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
