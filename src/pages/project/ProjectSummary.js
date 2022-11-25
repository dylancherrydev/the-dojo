import Avatar from "../../components/Avatar"
import { useFirestore } from "../../hooks/useFirestore"

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects')

  const handleClick = (e) => {
    deleteDocument(project.id)
  }

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">
          {project.name}
        </h2>
        <p className="due-date">
          Project due by: {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
          {project.details}
        </p>
        <h4>Project is assigned to:</h4>
        {project.assignedUsersList.map(user => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleClick}>Mark as Complete</button>
    </div>
  )
}
