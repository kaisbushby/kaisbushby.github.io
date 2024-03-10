import * as React from 'react'
import {motion} from 'framer-motion'
import "./Intro.scss"

export const Intro = () => {
    return(
        <div className='main-page-intro'>
            <motion.div
                animate={{scaleY:[0, 10]}}
                className='title-magic'
            >

            </motion.div>
        </div>
    )
}