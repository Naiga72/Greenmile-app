import React from 'react'
import './AboutSection.css'

function AboutSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart
}) {
    return (
        <>
           <div className = {lightBg? 'about-section': 'about-section darkBg'}>
            <div className = 'container'>
          <div
            className = 'row about-row'
            style = {{
              display: 'flex',
              flexDirection: imgStart === 'start'? 'row-reverse': 'row'
            }}
          >
            <div className = 'col'>
              <div className = 'about-text-wrapper'>
                <div className = 'top-line'> {topLine} </div>
                <h1 className = {lightText? 'heading': 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className = {
                    lightTextDesc
                      ? 'about-subtitle'
                      : 'about-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className = 'col'>
              <div className = 'about-img-wrapper'>
                <img src = {brook} alt = {alt} className = 'about-img' />
              </div>
            </div>
          </div>
        </div>
        </div> 
        </>
    )
}

export default AboutSection