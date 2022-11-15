// styles
import "./ProjectList.css"

export default function ProjectList( {projects} ) {
  return (
    <div>
      {projects.length === 0 && <p>No projects yet</p>}
      {projects.length > 0 && projects.map(project => (
        <p key={project.id}>{project.name}</p>
      ))}  
    </div>
  )
}
