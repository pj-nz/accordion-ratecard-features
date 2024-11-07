import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { SearchSuggestion } from '../../data/roles';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  suggestions: SearchSuggestion[];
  onSuggestionClick: (suggestion: SearchSuggestion) => void;
}

export function SearchInput({ 
  value, 
  onChange, 
  onSearch, 
  suggestions,
  onSuggestionClick 
}: SearchInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex-1 relative">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="search"
          className="flex-1 p-3 outline-none bg-transparent"
          placeholder="Search contractors by skill, location, or industry..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        
        <div className="flex items-center">
          {value && (
            <button 
              className="p-3 hover:bg-gray-50 transition-colors"
              onClick={() => {
                onChange('');
                setShowSuggestions(false);
              }}
              aria-label="Clear search"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
          <button 
            className="p-3 hover:bg-gray-50 transition-colors border-l border-gray-300"
            onClick={() => {
              onSearch();
              setShowSuggestions(false);
            }}
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50"
        >
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
              onClick={() => {
                onSuggestionClick(suggestion);
                setShowSuggestions(false);
              }}
            >
              <span className="flex-1">
                <span className="font-medium">{suggestion.text}</span>
                {suggestion.type === 'role' && (
                  <span className="text-sm text-gray-500 block">
                    {suggestion.category} • {suggestion.provider}
                  </span>
                )}
                {suggestion.type !== 'role' && (
                  <span className="text-sm text-gray-500 block">
                    {suggestion.type === 'category' ? 'Category' : 'Service Provider'}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}