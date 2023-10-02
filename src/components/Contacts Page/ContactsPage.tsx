import * as React from 'react'
import "./ContactsPage.scss"
import { motion } from 'framer-motion'

export const ContactsPage = () => {
    return(
        <motion.div className='contact-page container'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                <a>aaaa</a>
            
        </motion.div>
    )
}