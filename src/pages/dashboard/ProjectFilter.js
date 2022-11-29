import { useState } from "react"

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter() {
  const [currrentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    console.log(newFilter)
    setCurrentFilter(newFilter)
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
