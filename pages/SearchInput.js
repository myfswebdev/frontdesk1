import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <input
        type="text"
        id="search"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
