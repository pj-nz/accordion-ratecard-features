export interface Role {
  id: string;
  serviceProvider: string;
  category: string;
  role: string;
  hourlyRate: number | null;
  monthlyRate: number | null;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'role' | 'category' | 'provider';
  category?: string;
  provider?: string;
}

export const roles: Role[] = [
  // Keep existing roles...

  // IT Service Management - Lexel Services
  {
    id: 'lexel-services-service-desk-analyst',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "Service Desk Analyst",
    hourlyRate: 118.0,
    monthlyRate: null
  },
  {
    id: 'lexel-services-euc-desktop-engineer',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "EUC Desktop Engineer",
    hourlyRate: 169.0,
    monthlyRate: null
  },
  {
    id: 'lexel-services-senior-euc-desktop-engineer',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "Senior EUC Desktop Engineer",
    hourlyRate: 185.0,
    monthlyRate: null
  },
  {
    id: 'lexel-services-change-manager',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "Change Manager",
    hourlyRate: 185.0,
    monthlyRate: null
  },
  {
    id: 'lexel-services-senior-change-manager',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "Senior Change Manager",
    hourlyRate: 210.0,
    monthlyRate: null
  },
  {
    id: 'lexel-services-service-delivery-manager',
    serviceProvider: "Lexel Services",
    category: "IT Service Management",
    role: "Service Delivery Manager",
    hourlyRate: 158.0,
    monthlyRate: null
  },

  // Oracle Specialist - Lexel Services
  {
    id: 'lexel-services-oracle-consultant',
    serviceProvider: "Lexel Services",
    category: "Oracle Specialist",
    role: "Consultant",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-oracle-developer',
    serviceProvider: "Lexel Services",
    category: "Oracle Specialist",
    role: "Developer",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-oracle-functional-consultant',
    serviceProvider: "Lexel Services",
    category: "Oracle Specialist",
    role: "Functional Consultant",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-oracle-technical-consultant',
    serviceProvider: "Lexel Services",
    category: "Oracle Specialist",
    role: "Technical Consultant",
    hourlyRate: null,
    monthlyRate: null
  },

  // Change Management - Lexel Services
  {
    id: 'lexel-services-change-consultant',
    serviceProvider: "Lexel Services",
    category: "Change Management",
    role: "Change Consultant",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-change-manager-cm',
    serviceProvider: "Lexel Services",
    category: "Change Management",
    role: "Change Manager",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-senior-change-manager-cm',
    serviceProvider: "Lexel Services",
    category: "Change Management",
    role: "Senior Change Manager",
    hourlyRate: null,
    monthlyRate: null
  },

  // Other Roles - Lexel Services
  {
    id: 'lexel-services-technical-writer',
    serviceProvider: "Lexel Services",
    category: "Other Roles",
    role: "Technical Writer",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-documentation-specialist',
    serviceProvider: "Lexel Services",
    category: "Other Roles",
    role: "Documentation Specialist",
    hourlyRate: null,
    monthlyRate: null
  },
  {
    id: 'lexel-services-it-trainer',
    serviceProvider: "Lexel Services",
    category: "Other Roles",
    role: "IT Trainer",
    hourlyRate: null,
    monthlyRate: null
  },

  // IT Service Management - Lexel Resourcing
  {
    id: 'lexel-resourcing-service-desk-analyst',
    serviceProvider: "Lexel Resourcing",
    category: "IT Service Management",
    role: "Service Desk Analyst",
    hourlyRate: 70.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-incident-manager',
    serviceProvider: "Lexel Resourcing",
    category: "IT Service Management",
    role: "Incident Manager",
    hourlyRate: 145.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-problem-manager',
    serviceProvider: "Lexel Resourcing",
    category: "IT Service Management",
    role: "Problem Manager",
    hourlyRate: 145.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-change-manager',
    serviceProvider: "Lexel Resourcing",
    category: "IT Service Management",
    role: "Change Manager",
    hourlyRate: 160.0,
    monthlyRate: null
  },

  // Oracle Specialist - Lexel Resourcing
  {
    id: 'lexel-resourcing-oracle-consultant',
    serviceProvider: "Lexel Resourcing",
    category: "Oracle Specialist",
    role: "Consultant",
    hourlyRate: 190.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-oracle-developer',
    serviceProvider: "Lexel Resourcing",
    category: "Oracle Specialist",
    role: "Developer",
    hourlyRate: 160.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-oracle-functional-consultant',
    serviceProvider: "Lexel Resourcing",
    category: "Oracle Specialist",
    role: "Functional Consultant",
    hourlyRate: 210.0,
    monthlyRate: null
  },

  // Change Management - Lexel Resourcing
  {
    id: 'lexel-resourcing-change-consultant',
    serviceProvider: "Lexel Resourcing",
    category: "Change Management",
    role: "Change Consultant",
    hourlyRate: 160.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-change-manager-cm',
    serviceProvider: "Lexel Resourcing",
    category: "Change Management",
    role: "Change Manager",
    hourlyRate: 175.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-change-analyst',
    serviceProvider: "Lexel Resourcing",
    category: "Change Management",
    role: "Change Analyst",
    hourlyRate: 100.0,
    monthlyRate: null
  },

  // Other Roles - Lexel Resourcing
  {
    id: 'lexel-resourcing-technical-writer',
    serviceProvider: "Lexel Resourcing",
    category: "Other Roles",
    role: "Technical Writer",
    hourlyRate: 130.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-documentation-specialist',
    serviceProvider: "Lexel Resourcing",
    category: "Other Roles",
    role: "Documentation Specialist",
    hourlyRate: 115.0,
    monthlyRate: null
  },
  {
    id: 'lexel-resourcing-it-trainer',
    serviceProvider: "Lexel Resourcing",
    category: "Other Roles",
    role: "IT Trainer",
    hourlyRate: 140.0,
    monthlyRate: null
  }
];

export const categories = Array.from(new Set(roles.map(role => role.category))).sort();
export const serviceProviders = Array.from(new Set(roles.map(role => role.serviceProvider))).sort();

export function getSuggestions(query: string): SearchSuggestion[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const suggestions: SearchSuggestion[] = [];

  // Add matching roles
  roles.forEach(role => {
    if (role.role.toLowerCase().includes(normalizedQuery)) {
      suggestions.push({
        id: role.id,
        text: role.role,
        type: 'role',
        category: role.category,
        provider: role.serviceProvider
      });
    }
  });

  // Add matching categories
  categories.forEach(category => {
    if (category.toLowerCase().includes(normalizedQuery)) {
      suggestions.push({
        id: `category-${category}`,
        text: category,
        type: 'category'
      });
    }
  });

  // Add matching service providers
  serviceProviders.forEach(provider => {
    if (provider.toLowerCase().includes(normalizedQuery)) {
      suggestions.push({
        id: `provider-${provider}`,
        text: provider,
        type: 'provider'
      });
    }
  });

  return suggestions;
}

interface SearchFilters {
  categories?: string[];
  providers?: string[];
  minRate?: number;
  maxRate?: number;
}

export function searchRoles(query: string, filters: SearchFilters): Role[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return roles.filter(role => {
    // Text search
    const matchesQuery = !normalizedQuery || 
      role.role.toLowerCase().includes(normalizedQuery) ||
      role.category.toLowerCase().includes(normalizedQuery) ||
      role.serviceProvider.toLowerCase().includes(normalizedQuery);

    // Category filter
    const matchesCategory = !filters.categories?.length || 
      filters.categories.includes(role.category);

    // Provider filter
    const matchesProvider = !filters.providers?.length || 
      filters.providers.includes(role.serviceProvider);

    // Rate filter
    const rate = role.hourlyRate || role.monthlyRate;
    const matchesRate = (!filters.minRate || (rate && rate >= filters.minRate)) &&
      (!filters.maxRate || (rate && rate <= filters.maxRate));

    return matchesQuery && matchesCategory && matchesProvider && matchesRate;
  });
}