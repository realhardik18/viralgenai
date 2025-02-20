import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link href={'/'}>
            <p className="btn btn-ghost text-xl">ViralGen</p>
        </Link>
    </div>
    <div className="flex-none">
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <p>Hello</p>            
        </div>            
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link href={"/tools"}>
                <p>tools</p>            
            </Link>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
            <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar