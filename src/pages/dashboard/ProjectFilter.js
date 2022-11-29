const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter({ currrentFilter, changeFilter }) {
  

  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <nav>
        {filterList.map(f => (
          <button 
            key={f}
            onClick={() => handleClick(f)}
            className={f === currrentFilter ? "active" : "" }
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  )
}
