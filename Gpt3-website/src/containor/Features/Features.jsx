import React from 'react'
import './features.css'
import { featuresData } from './featuresData'
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) => {
          return <Feature title={item.title} text={item.text} key={index}/>

        })}
      </div>
    </div>
  )
}

export default Features