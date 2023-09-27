import * as React from 'react'
import { Intro } from './sections/Intro'
import { About } from './sections/About'
import { Work } from './sections/Work'
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