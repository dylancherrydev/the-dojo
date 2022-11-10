import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState (' ')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers]= useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`name = ${name}, details = ${details}, due date = ${dueDate}`)
  }

  return (
    <div className='create-from'>
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            value={name} 
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            required
            value={details} 
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input 
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            required
            value={dueDate} 
          />
        </label>
        <label>
          <span>Project category:</span>
          {/* category select here */}
        </label>
        <label>
          <span>Assign to:</span>
          {/* assignee select here */}
        </label>
        <button className="btn">Add project</button>
      </form>
    </div>
  )
}
