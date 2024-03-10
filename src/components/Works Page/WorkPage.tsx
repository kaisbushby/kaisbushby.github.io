import * as React from 'react'
import "./WorkPage.scss"
import { motion, useScroll } from 'framer-motion'
import { TimelineCard } from './Card/TimelineCard'

export const WorksPage = () => {

    const { scrollYProgress } = useScroll();

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    return (
        <motion.div className='contact-page container'
            initial={{ opacity: 0, x:"-10%" }}
            animate={{ opacity: 1, x:"0%"}}
            exit={{ opacity: 0, translateX:"100%"  }}
        >
            <h2 className='page-title'>
                Work
            </h2>

            <div className='work-timeline'>
                <motion.div className='line' style={{ scaleY: scrollYProgress}}/>
                <TimelineCard />
                <TimelineCard />
                <TimelineCard />
                <TimelineCard />
            </div>
            

        </motion.div>
    )
}