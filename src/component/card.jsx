import React from 'react';

const JobCard = ({ job, onFilterClick }) => {
  // Combine all tag strings (role, level, languages, tools) into one array
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={`job-card ${job.isFeatured ? 'isFeatured' : ''}`}>
      {/* Left Side: Logo & Info */}
      <div className="job-info">
        <img src={job.logo} alt={`${job.name} logo`} className="company-logo" />
        
        <div className="job-details">
          <div className="company-header">
            <span className="company-name">{job.name}</span>
            {job.isNew && <span className="badge badge-new">NEW!</span>}
            {job.isFeatured && <span className="badge badge-featured">FEATURED</span>}
          </div>

          <h2 className="job-position">{job.post}</h2>

          <p className="job-meta">
            {job.time} • {job.contract} • {job.country}
          </p>
        </div>
      </div>

      <hr className="divider" />

      {/* Right Side: Clickable Tags */}
      <div className="job-tags">
        {tags.map((tag, index) => (
          <button 
            key={index} 
            className="tag-btn"
            onClick={() => onFilterClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;