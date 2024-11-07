import React from 'react';
import { FilterSection } from './FilterSection';

const filterSections = [
  {
    title: 'Availability',
    options: [
      { id: 'immediate', label: 'Immediately Available', defaultChecked: true },
      { id: 'one-month', label: 'Available within 1 month', defaultChecked: true },
    ],
  },
  {
    title: 'Contract Type',
    options: [
      { id: 'full-time', label: 'Full-time Contract', defaultChecked: true },
      { id: 'part-time', label: 'Part-time Contract', defaultChecked: true },
    ],
  },
  {
    title: 'Experience Level',
    options: [
      { id: 'senior', label: 'Senior (5+ years)', defaultChecked: true },
      { id: 'mid-level', label: 'Mid-Level (2-5 years)', defaultChecked: true },
    ],
  },
];

export function FilterPanel() {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
      <div className="space-y-4">
        {filterSections.map((section) => (
          <FilterSection
            key={section.title}
            title={section.title}
            options={section.options}
          />
        ))}
      </div>
    </div>
  );
}