import React, { useState } from 'react';
import { 
  Rocket, Code, TestTube, Database, Cloud, Lock,
  Headphones, LayoutTemplate, Sparkles, CircuitBoard, Users, Brain
} from 'lucide-react';
import { AccordionItem } from './AccordionItem';
import { SearchBar } from './SearchBar';

export interface WhySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function WhySection({ 
  title = "Our Services",
  subtitle = "> Lexel Resourcing",
  description = "The Lexel Resourcing team understands the success factors required to identify and secure outstanding IT and Digital talent."
}: WhySectionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const leftColumnItems = [
    {
      id: 'project-delivery',
      title: 'Project Delivery',
      content: 'Project managers, scrum masters, business analysts, program managers, and coordinators delivering successful IT initiatives.',
      icon: <Rocket size={24} />
    },
    {
      id: 'software-development',
      title: 'Software Development',
      content: 'Software engineers, full-stack developers, frontend specialists, and development managers.',
      icon: <Code size={24} />
    },
    {
      id: 'testing-qa',
      title: 'Testing/Quality Assurance',
      content: 'Test engineers, automation specialists, QA leads, and test managers ensuring software quality.',
      icon: <TestTube size={24} />
    },
    {
      id: 'data-analytics',
      title: 'Data and Analytics',
      content: 'Data analysts, engineers, scientists, BI developers, and database administrators.',
      icon: <Database size={24} />
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud and Infrastructure',
      content: 'Cloud engineers, infrastructure specialists, system administrators, and platform engineers.',
      icon: <Cloud size={24} />
    },
    {
      id: 'security',
      title: 'Security',
      content: 'Security consultants, architects, analysts, and engineers protecting digital assets.',
      icon: <Lock size={24} />
    }
  ];

  const rightColumnItems = [
    {
      id: 'it-service-management',
      title: 'IT Service Management',
      content: 'Service desk analysts, change managers, and IT service delivery professionals.',
      icon: <Headphones size={24} />
    },
    {
      id: 'architecture',
      title: 'Architecture',
      content: 'Enterprise, solution, technical, and specialized architects designing scalable solutions.',
      icon: <LayoutTemplate size={24} />
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      content: 'AI/ML engineers, researchers, data scientists, and AI consultants.',
      icon: <Sparkles size={24} />
    },
    {
      id: 'oracle-specialist',
      title: 'Oracle Specialist',
      content: 'Oracle consultants, developers, DBAs, and integration specialists.',
      icon: <CircuitBoard size={24} />
    },
    {
      id: 'change-management',
      title: 'Change Management',
      content: 'Change consultants, managers, and analysts facilitating organizational transformation.',
      icon: <Users size={24} />
    },
    {
      id: 'other-roles',
      title: 'Other Roles',
      content: 'Technical writers, trainers, documentation specialists, and other specialized IT professionals.',
      icon: <Brain size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-semibold tracking-wide uppercase mb-2">{subtitle}</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <SearchBar />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {leftColumnItems.map(item => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                icon={item.icon}
                isOpen={openItems[item.id] || false}
                onClick={() => toggleItem(item.id)}
              />
            ))}
          </div>
          
          <div className="space-y-3">
            {rightColumnItems.map(item => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                icon={item.icon}
                isOpen={openItems[item.id] || false}
                onClick={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}