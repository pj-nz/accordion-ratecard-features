import React from 'react';

interface FilterCheckboxProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

export function FilterCheckbox({ id, label, defaultChecked = false }: FilterCheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="rounded border-gray-300"
        defaultChecked={defaultChecked}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}