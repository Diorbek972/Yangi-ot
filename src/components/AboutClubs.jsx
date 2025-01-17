import React from 'react'

export default function AboutClubs({number, text}) {
  return (

    <div>
       <h2 className='green'>{number}</h2>
       <p className='texts'>{text}</p>
    </div>
  )
}
