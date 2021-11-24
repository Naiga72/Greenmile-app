import React from 'react'
import { aboutObjOne, aboutObjTwo } from './AboutData';
import AboutSection from './AboutSection';

function About() {
    return (
        <>
            <AboutSection {...aboutObjOne} />
            <AboutSection {...aboutObjTwo} /> 
        </>
    )
}

export default About