import React, { useState } from 'react';
import { JobData } from './assets/asset';
import Header from './component/header';
import JobCard from './component/card';
import FilterBar from './component/filterbar';
import './App.css';

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleAddFilter = (tag) => {
    if (!selectedFilters.includes(tag)) {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };

  const handleRemoveFilter = (tagToRemove) => {
    setSelectedFilters(selectedFilters.filter(tag => tag !== tagToRemove));
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredJobs = JobData.filter((job) => {
    if (selectedFilters.length === 0) return true;
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return selectedFilters.every((filter) => jobTags.includes(filter));
  });

  return (
    <div className="app">
      <Header />

      <main className="container">
        {selectedFilters.length > 0 && (
          <FilterBar 
            filters={selectedFilters} 
            onRemoveFilter={handleRemoveFilter} 
            onClear={handleClearFilters} 
          />
        )}

        <div className="job-list">
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onFilterClick={handleAddFilter} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
// the .map fxn is the best 
//  not to talk abt the spread operators😉