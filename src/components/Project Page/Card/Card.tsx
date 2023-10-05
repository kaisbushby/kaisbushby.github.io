import * as React from 'react'
import {FiExternalLink} from '@react-icons/all-files/fi/FiExternalLink'
import {IoLogoGithub} from '@react-icons/all-files/io5/IoLogoGithub'
import "./Card.scss"
import { useInView } from 'framer-motion'

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
    const ref = React.useRef(null)
    const isInView = useInView(ref, {margin: "-100px 0px -100px 0px"})
    

    React.useEffect(() => {
        console.log(isInView)
    }, [isInView])

    return(
        <div className={`card ${isInView ? 'show' : 'hidden'}`} ref={ref}>
            <img className='project-image' src='https://www.cio.com/wp-content/uploads/2023/05/iStock-image-Article-4-1148233882.jpg' decoding='async'/>
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