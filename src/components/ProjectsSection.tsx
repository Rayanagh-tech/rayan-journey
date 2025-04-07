
import React, { useState } from 'react';
import { Code, Database, Server, Cpu, GitBranch, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ["All", "DevOps/Cloud", "Data/ML", "Programming"];

const projects = [
  {
    title: "End-to-End MLOps Project with DVC Pipeline",
    description: "Implementation of a complete MLOps pipeline with DVC for data and model tracking. Integrated FastAPI for the API and machine learning model integration.",
    category: "DevOps/Cloud",
    icon: <GitBranch className="h-12 w-12 text-white" />
  },
  {
    title: "Real-Time Data Streaming Project",
    description: "Implementation of a real-time data streaming system using Apache Kafka and Zookeeper. Used PostgreSQL, Cassandra, Apache Spark, and deployed with Docker.",
    category: "DevOps/Cloud",
    icon: <Server className="h-12 w-12 text-white" />
  },
  {
    title: "ETL Pipeline for MLOps Data Management",
    description: "Created an ETL pipeline for medical data extraction, transformation, and loading. Integration with Apache Airflow for process automation.",
    category: "Data/ML",
    icon: <Database className="h-12 w-12 text-white" />
  },
  {
    title: "Object Detection with Computer Vision",
    description: "Development of a real-time object detection application using Python, OpenCV, and YOLOv4 for computer vision.",
    category: "Data/ML",
    icon: <Cpu className="h-12 w-12 text-white" />
  },
  {
    title: "Voice-Controlled Robot (System Programming)",
    description: "Design of a robot with voice recognition and motorized commands. Programming in C and integration of embedded systems with Arduino.",
    category: "Programming",
    icon: <Terminal className="h-12 w-12 text-white" />
  },
  {
    title: "Online Movie Booking Platform",
    description: "Development of an online movie reservation platform with .NET MVC. Created Windows Forms applications using the MVVM model in C#.",
    category: "Programming",
    icon: <Code className="h-12 w-12 text-white" />
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={cn(
                "border-2",
                activeCategory === category 
                  ? "border-primary text-primary bg-primary/5" 
                  : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="cloud-gradient p-6 flex justify-center">
                  <div className="bg-white/20 rounded-full p-4">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="button-outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
