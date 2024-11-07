import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { FilterPanel } from './FilterPanel';
import { searchRoles, getSuggestions, Role, SearchSuggestion } from '../../data/roles';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [results, setResults] = useState<Role[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

  useEffect(() => {
    if (searchValue.trim()) {
      const newSuggestions = getSuggestions(searchValue);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  const handleSearch = () => {
    const searchResults = searchRoles(searchValue, {});
    setResults(searchResults);
    console.log('Search results:', searchResults);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchValue(suggestion.text);
    handleSearch();
  };

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
          
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>

        {isSettingsOpen && <FilterPanel />}
      </div>
    </div>
  );
}