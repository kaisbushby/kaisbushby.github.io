import * as React from 'react'
import { Intro } from './Sections/Intro'
import { About } from './Sections/About'
import { Work } from './Sections/Work'
import { motion } from 'framer-motion'
import "./MainPage.scss"

export const MainPage = () => {
    return(
        <motion.div className='main-page-wrapper container'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{x: window.innerWidth}}
            >
            <Intro/>
            <About/>
            <Work/>
        </motion.div>
    )
}