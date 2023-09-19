import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ErrorPage.scss"


export const ErrorPage = () => {
    const navigate = useNavigate();

    React.useEffect( () => {
        // Set timer for 3 seconds to redirect
        setInterval(() => {
            navigate("/")
        }, 3000)
    }, [])

    return(
        <nav className='error-page'>
            
        </nav>
    )
}