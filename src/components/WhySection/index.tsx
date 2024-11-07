import React, { useState, useCallback } from 'react';
import { 
  HeadphoneIcon, Database2, Users, Brain
} from 'lucide-react';
import { AccordionItem } from '../AccordionItem';
import { SearchBar } from '../SearchBar';
import { roles as allRoles, Role } from '../../data/roles';
import toast from 'react-hot-toast';

const categories = [
  {
    id: 'it-service-management',
    title: 'IT Service Management',
    content: 'Service desk analysts, change managers, and IT service delivery professionals.',
    icon: <HeadphoneIcon size={24} />,
    category: 'IT Service Management'
  },
  {
    id: 'oracle-specialist',
    title: 'Oracle Specialist',
    content: 'Oracle consultants, developers, DBAs, and integration specialists.',
    icon: <Database2 size={24} />,
    category: 'Oracle Specialist'
  },
  {
    id: 'change-management',
    title: 'Change Management',
    content: 'Change consultants, managers, and analysts facilitating organizational transformation.',
    icon: <Users size={24} />,
    category: 'Change Management'
  },
  {
    id: 'other-roles',
    title: 'Other Roles',
    content: 'Technical writers, trainers, documentation specialists, and other specialized IT professionals.',
    icon: <Brain size={24} />,
    category: 'Other Roles'
  }
];

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
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddToTeam = useCallback((role: Role) => {
    setSelectedRoles(prev => {
      if (prev.some(r => r.id === role.id)) {
        toast.error('This role is already in your team');
        return prev;
      }
      toast.success(`Added ${role.role} to team`);
      return [...prev, role];
    });
  }, []);

  const getRolesForCategory = (category: string) => {
    const filteredRoles = allRoles.filter(role => role.category === category);
    console.log('Filtered roles for', category, ':', filteredRoles); // Debug log
    return filteredRoles;
  };

  // Split categories into two columns
  const midpoint = Math.ceil(categories.length / 2);
  const leftColumnItems = categories.slice(0, midpoint);
  const rightColumnItems = categories.slice(midpoint);

  return (
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
              roles={getRolesForCategory(item.category)}
              onAddToTeam={handleAddToTeam}
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
              roles={getRolesForCategory(item.category)}
              onAddToTeam={handleAddToTeam}
            />
          ))}
        </div>
      </div>
    </div>
  );
}