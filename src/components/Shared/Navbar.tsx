import * as React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
    const [isOnTop, setIsOnTop] = React.useState<boolean>(true)

    // function useTraceUpdate(props) {
    //     const prev = React.useRef(props);
    //     React.useEffect(() => {
    //         const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
    //             if (prev.current[k] !== v) {
    //                 ps[k] = [prev.current[k], v];
    //             }
    //             return ps;
    //         }, {});
    //         if (Object.keys(changedProps).length > 0) {
    //             console.log('Changed props:', changedProps);
    //         }
    //         prev.current = props;
    //     });
    // }

    const handleScroll = () => {
        if (window.scrollY == 0) {
            setIsOnTop(true)
        }
        else {
            setIsOnTop(false)
        }
    }

    React.useEffect(() => {
        console.log("Navbar rerender")
        window.addEventListener('scroll', handleScroll, { passive: true })
        // Usage
        // useTraceUpdate(props);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className={`navbar ${isOnTop ? "" : "active"}`}>
            <div className='container nav-links'>
                <Link to={"/"}>
                    <img alt={''} className='logo' />
                </Link>
                <div className='link-box'>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/work'}>Work</Link>
                </div>

            </div>
        </nav>
    )
}

export default React.memo(Navbar)