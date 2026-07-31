import React from 'react';

const FilterBar = ({ filters, onRemoveFilter, onClearFilters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-tags">
        {filters.map((filter, index) => (
          <div key={index} className="filter-chip">
            <span className="filter-chip-text">{filter}</span>
            <button 
              className="filter-chip-remove" 
              onClick={() => onRemoveFilter(filter)}
              aria-label={`Remove filter ${filter}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      <button className="clear-btn" onClick={onClearFilters}>
        Clear
      </button>
    </div>
  );
};

export default FilterBar;