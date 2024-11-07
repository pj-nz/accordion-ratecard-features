import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Role } from '../../data/roles';
import { RoleTile } from '../RoleTile';

export interface AccordionItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  roles?: Role[];
  onAddToTeam?: (role: Role) => void;
}

export function AccordionItem({ 
  title, 
  content, 
  icon, 
  isOpen, 
  onClick,
  roles = [],
  onAddToTeam = () => {}
}: AccordionItemProps) {
  console.log('Roles for', title, ':', roles); // Debug log

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
          isOpen ? 'bg-gray-50' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <div className="text-orange-500">
            {icon}
          </div>
          <span className="font-semibold text-left">{title}</span>
        </div>
        <ChevronDown 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="border-t border-gray-200">
          <div className="p-4">
            <p className="text-gray-600 mb-6">{content}</p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((role) => (
                <RoleTile
                  key={role.id}
                  role={role}
                  onAddToTeam={onAddToTeam}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}