import * as React from 'react'
import "./ContactsPage.scss"
import { motion } from 'framer-motion'

export const ContactsPage = () => {
    return(
        <motion.div className='contact-page container'
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth}}
            >
            
        </motion.div>
    )
}