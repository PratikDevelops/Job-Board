import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { JobCategories, JobLocations, jobsData } from '../assets/assets';
import Jobcard from './Jobcard';

function JobListing() {
  const { searchFilter, setSearchFilter, isSearched } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  
  const filteredJobs = (jobsData || []).filter((job) => {
    const matchesCategory = Array.isArray(searchFilter.category) && searchFilter.category.length
      ? searchFilter.category.includes(job?.category || '')
      : true;
    const matchesLocation = searchFilter.location
      ? job?.location?.toLowerCase().includes(searchFilter.location.toLowerCase())
      : true;
    const matchesTitle = searchFilter.title
      ? job?.title?.toLowerCase().includes(searchFilter.title.toLowerCase())
      : true;

    return matchesCategory && matchesLocation && matchesTitle;
  });


  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="joblisting-container">
      <div className="left-section">
        <div className="filter-section">
          <h4>Search By Categories</h4>
          <ul className="filter-list">
            {JobCategories.map((category, index) => (
              <li key={index} className="filter-item">
                <input
                  type="checkbox"
                  value={category}
                  onChange={(e) => {
                    const checkedCategory = e.target.value;
                    setSearchFilter((prev) => ({
                      ...prev,
                      category: e.target.checked
                        ? [...prev.category, checkedCategory]
                        : prev.category.filter((cat) => cat !== checkedCategory),
                    }));
                  }}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-section">
          <h4>Search By Location</h4>
          <ul className="filter-list">
            {JobLocations.map((location, index) => (
              <li key={index} className="filter-item">
                <input
                  type="radio"
                  name="location"
                  value={location}
                  onChange={(e) =>
                    setSearchFilter((prev) => ({
                      ...prev,
                      location: e.target.checked ? location : '',
                    }))
                  }
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right-section">
        <section className="job-list">
          <h3>Latest Jobs</h3>
          <div className="job-cards">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => <Jobcard key={index} job={job} />)
            ) : (
              <div className="fallback-message">
                {isSearched
                  ? 'No jobs found matching your search criteria.'
                  : 'No jobs available at the moment.'}
              </div>
            )}
          </div>

          
          {filteredJobs.length > jobsPerPage && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-btn ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default JobListing;
