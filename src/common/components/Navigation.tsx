import { Link } from "react-router";



export function Navigation() {

  return (
    <>
      <nav>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </nav>
    </>
  )
} 