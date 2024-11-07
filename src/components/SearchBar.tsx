import React, { useState } from 'react';
import { Search, Settings, X } from 'lucide-react';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Search Contractors</h2>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm">
          <button 
            className="p-3 hover:bg-gray-50 transition-colors border-r border-gray-300"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            aria-label="Search filters"
          >
            <Settings className="w-5 h-5 text-gray-500" />
          </button>
          
          <input
            type="search"
            className="flex-1 p-3 outline-none bg-transparent"
            placeholder="Search contractors by skill, location, or industry..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          
          <div className="flex items-center">
            {searchValue && (
              <button 
                className="p-3 hover:bg-gray-50 transition-colors"
                onClick={() => setSearchValue('')}
                aria-label="Clear search"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
            <button 
              className="p-3 hover:bg-gray-50 transition-colors border-l border-gray-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {isSettingsOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Immediately Available</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Available within 1 month</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contract Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Full-time Contract</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Part-time Contract</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Senior (5+ years)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span>Mid-Level (2-5 years)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}