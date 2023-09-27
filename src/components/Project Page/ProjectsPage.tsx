import * as React from 'react'
import "./ProjectsPage.scss"
import { motion } from 'framer-motion'

export const ProjectsPage = () => {
    return(
        <motion.div className='projects-page container'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{x: window.innerWidth}}
            >
            
        </motion.div>
    )
}