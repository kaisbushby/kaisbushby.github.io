import * as React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

export const Navbar = () => {
    const [isOnTop, setIsOnTop] = React.useState<boolean>()

    const handleScroll = () => {
        if (window.scrollY == 0) {
            setIsOnTop(true)
        }
        else {
            setIsOnTop(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className={`navbar ${isOnTop ? "" : "active"}`}>
            <div className='container nav-links'>
                <img alt={''} className='logo'/>
                <div className='link-box'>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/work'}>Work</Link>
                </div>

            </div>
        </nav>
    )
}