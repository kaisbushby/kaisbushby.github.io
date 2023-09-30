import * as React from 'react'
import {FiExternalLink} from '@react-icons/all-files/fi/FiExternalLink'
import {IoLogoGithub} from '@react-icons/all-files/io5/IoLogoGithub'
import { useElementOnScreen } from 'Hooks/useElementOnScreen'
import "./Card.scss"

interface Props{
    image: string,
    title: string,
    description: string,
    techlist: string[],
    demolink?: string,
    githublink?: string,
    id: number
}

export const Card = () => {
    const [containerRef, isIntersecting] = useElementOnScreen();
    

    React.useEffect(() => {
        console.log(isIntersecting)
    }, [isIntersecting])

    return(
        <div className='card' ref={containerRef}>
            <img className='project-image' src='https://uploads-ssl.webflow.com/5d7e8885cad5174a2fcb98d7/64ad807cda5417d65d80aac0_Hoshikawa%2520Sara.jpeg' decoding='async'/>
            <div className='separator'>
                <div className='overlay'>
                    <div className='top color1'/>
                    <div className='bottom color1'/>
                </div>
                <div className='right'/>
            </div>
            <div className='project-details'>
                <h2 className='title'>This website</h2>
                <div className='description'>
                    <p>
                        This website is used to demonstrate my web design skills by using React and CSS<br/>
                        It uses effects like CSS animations and Framer motion to make the website feel smooth
                    </p>
                </div>
                <ul className='tech-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Webpack</li>
                </ul>
                <div className='project-link-box'>
                    <a className='demo-link'>Demo<FiExternalLink/></a>
                    <a className='github-link'>Github <IoLogoGithub/></a>
                </div>
            </div>
        </div>
    )
}