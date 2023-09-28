import * as React from 'react'
import "./ProjectsPage.scss"
import { motion } from 'framer-motion'
import { Card } from './Card/Card'

export const ProjectsPage = () => {
    return(
        <motion.div className='projects-page container'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{x: window.innerWidth}}
            >
            
            <div className='card-list'>
                <Card/>
            </div>
            
        </motion.div>
    )
}