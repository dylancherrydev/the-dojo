import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'
import { useState } from "react"

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')
  const [currrentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter currrentFilter={currrentFilter} changeFilter={changeFilter}/>}
      {documents && <ProjectList projects={documents}/>}
    </div>
  )
}
