import React from 'react';
import { Plus, Star } from 'lucide-react';
import type { Role } from '../data/roles';

interface RoleTileProps {
  role: Role;
  onAddToTeam: (role: Role) => void;
}

export function RoleTile({ role, onAddToTeam }: RoleTileProps) {
  const getRoleLevel = (rate: number | null): string => {
    if (!rate) return 'Entry Level';
    if (rate < 120) return 'Entry Level';
    if (rate < 160) return 'Mid Level';
    return 'Senior Level';
  };

  const level = getRoleLevel(role.hourlyRate);
  const levelColors = {
    'Entry Level': 'bg-blue-100 text-blue-700',
    'Mid Level': 'bg-purple-100 text-purple-700',
    'Senior Level': 'bg-orange-100 text-orange-700'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{role.role}</h3>
          <p className="text-sm text-gray-500">{role.serviceProvider}</p>
        </div>
        <button
          onClick={() => onAddToTeam(role)}
          className="p-2 rounded-full bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors"
          aria-label="Add to team"
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[level as keyof typeof levelColors]}`}>
            {level}
          </span>
          {level === 'Senior Level' && (
            <span className="text-yellow-500">
              <Star size={16} fill="currentColor" />
            </span>
          )}
        </div>

        <div className="text-sm text-gray-600">
          {role.hourlyRate && (
            <div className="flex items-baseline gap-1">
              <span className="font-semibold text-gray-900">${role.hourlyRate}</span>
              <span className="text-gray-500">/ hour</span>
            </div>
          )}
          {role.monthlyRate && (
            <div className="flex items-baseline gap-1">
              <span className="font-semibold text-gray-900">${role.monthlyRate.toLocaleString()}</span>
              <span className="text-gray-500">/ month</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}