import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ title, content, icon, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
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
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="p-4 text-gray-600 border-t border-gray-200">{content}</p>
      </div>
    </div>
  );
}