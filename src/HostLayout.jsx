import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <ul>
          <li>
            <Link to='host'>Dashboard</Link>
          </li>
          <li>
            <Link to='income'>Income</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}