import { useAuthContext } from "../hooks/useAuthContext"
// styles
import "./Avatar.css"

export default function Avatar({ src }) {
  const { user } = useAuthContext

  return (
    <div className='avatar'>
      <img src={src} alt="user avatar" />
    </div>
  )
}
