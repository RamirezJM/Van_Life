import { Link } from "react-router-dom"

export default function Header(){
  return(
    <header>
     <Link to='/'><h1>#VANLIFE</h1></Link>
      <nav>
        <ul className="link-list">
          <li>
            <Link to='/host' className="nav-link">Host</Link>
          </li>
          <li>
            <Link to='/about' className="nav-link">About</Link>
          </li>
          <li>
            <Link to='/vans' className="nav-link">Vans</Link>
          </li>
         {/*  <li>
            <Link to='/vans/:id' className="nav-link">Vans</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

