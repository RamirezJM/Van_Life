import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  
 
  return (
    <>
      <nav className="host-nav">
        <ul>
          <li>
            <NavLink to='/host' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'} end>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='income' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'}>Income</NavLink>
          </li>
          <li>
            <NavLink to='reviews' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'}>Reviews</NavLink>
          </li>
           <li>
            <NavLink to='vans' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'}>Vans</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}