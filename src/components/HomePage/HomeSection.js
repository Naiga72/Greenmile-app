import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Navigation/Button'
import './HomeSection.css'

function HomeSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
    return (
        <>
        <div className = {lightBg? 'home-section': 'home-section darkBg'}>
            <div className = 'container'>
          <div
            className = 'row home-row'
            style = {{
              display: 'flex',
              flexDirection: imgStart === 'start'? 'row-reverse': 'row'
            }}
          >
            <div className = 'col'>
              <div className = 'home-text-wrapper'>
                <div className = 'top-line'> {topLine} </div>
                <h1 className = {lightText? 'heading': 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className = {
                    lightTextDesc
                      ? 'home-subtitle'
                      : 'home-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to = '/signup'>
                  <Button buttonSize = 'btn--wide' buttonColor = 'blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className = 'col'>
              <div className = 'home-img-wrapper'>
                <img src = {img} alt = {alt} className = '' />
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default HomeSection