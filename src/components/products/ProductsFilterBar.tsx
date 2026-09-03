import React from 'react';

export type Sort = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export const sortOptions: { value: Sort; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
];

export interface ProductsFilterBarProps {
  categories: readonly string[];
  category: string;
  onSelectCategory: (category: string) => void;
  sort: Sort;
  onSelectSort: (sort: Sort) => void;
}

export function ProductsFilterBar({
  categories,
  category,
  onSelectCategory,
  sort,
  onSelectSort,
}: ProductsFilterBarProps) {
  return (
    <div className="mt-10 flex flex-col gap-5 border-y border-gray-200 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div
        role="group"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((option) => {
          const active = option === category;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onSelectCategory(option)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-150 ${
                active
                  ? 'bg-[#0E004B] text-white font-semibold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-[14px] font-medium text-gray-600">
          Sort by
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSelectSort(e.target.value as Sort)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-[14px] text-gray-800 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
