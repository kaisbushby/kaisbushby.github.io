import * as React from 'react'
import "./ProjectsPage.scss"
import { motion } from 'framer-motion'
import { Card } from './Card/Card'

export const ProjectsPage = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 
    
    return (
        <motion.div className='projects-page container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
        >
            <h2 className='page-title'>
                Projects
            </h2>
            <div className='card-list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </motion.div>
    )
}