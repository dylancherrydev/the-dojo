import { useCollection } from '../hooks/useCollection.js'
import Avatar from './Avatar.js'

// styles
import "./OnlineUsers.css"


export default function OnlineUsers() {
  const { documents, error } = useCollection('users')

  return (
    <div className='user-list'>
      <h2>All Users:</h2>
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />          
        </div>
      ))}
    </div>
  )
}
