import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Faisal Moyen
          </Link>
        </div>
        <div className="navbar-end">
          <div className="btn btn-ghost normal-case text-xl">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1x_98UrsxqcVRyK7ZolgXiuY4JNZ0tRtF/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
