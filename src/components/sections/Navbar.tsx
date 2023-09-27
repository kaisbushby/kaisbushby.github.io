import * as React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

export const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='container'>
                <div className='link-box'>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>

            </div>
        </nav>
    )
}