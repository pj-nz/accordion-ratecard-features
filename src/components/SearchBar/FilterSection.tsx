import React from 'react';
import { FilterCheckbox } from './FilterCheckbox';

interface FilterSectionProps {
  title: string;
  options: Array<{
    id: string;
    label: string;
    defaultChecked?: boolean;
  }>;
}

export function FilterSection({ title, options }: FilterSectionProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <FilterCheckbox
            key={option.id}
            id={option.id}
            label={option.label}
            defaultChecked={option.defaultChecked}
          />
        ))}
      </div>
    </div>
  );
}