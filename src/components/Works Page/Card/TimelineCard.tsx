import * as React from 'react'

import './TimelineCard.scss'
import { useInView } from 'framer-motion'

interface Props {

}

export const TimelineCard = (props: Props) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { margin: "30% 0px -40% 0px" })

    return (
        <div ref={ref} className='timeline-card'>
            <div className={`timeline-card-info ${isInView ? 'show' : 'hidden'}`}>
                <div className={"timeline-card-info-title"}>
                    <h2>TITLE</h2>
                </div>
                <div className={"timeline-card-info-text"}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ul className='tech-list'>
                    <li>COBOL</li>
                    <li>Coolgen</li>
                    <li>DB2</li>
                </ul>
                </div>
            </div>


            <div className={`timeline-card-date ${isInView ? 'show' : 'hidden'}`}>
                <h2>2017</h2>
                <h3>September ~ October</h3>
            </div>
        </div>

    )
}