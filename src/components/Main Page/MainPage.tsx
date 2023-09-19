import * as React from 'react'
import { Intro } from './sections/Intro'
import { About } from './sections/About'
import { Work } from './sections/Work'
import "./MainPage.scss"

export const MainPage = () => {
    return(
        <div className='main-page-wrapper'>
            <Intro/>
            <About/>
            <Work/>
        </div>
    )
}