import { NavLink, Link } from "react-router-dom"
import user from '../assets/user.svg'

export default function Header(){
  
  
  return(
    <header>
     <Link to='/'><h1>#VANLIFE</h1></Link>
      <nav>
        <ul className="link-list">
          <li>
            <NavLink to='host' className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>Host</NavLink>
          </li>
          <li>
            <NavLink to='about' className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>About</NavLink>
          </li>
          <li>
            <NavLink to='vans' className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>Vans</NavLink>
          </li>
           <li>
            <Link to='login' className='user-logo'>
            <img src={user} alt= 'user logo' />
            </Link>
          </li>
       
        </ul>
      </nav>
    </header>
  )
}

