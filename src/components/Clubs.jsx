import React from 'react'

export default function Clubs({img, deploy, texts}) {
  return (
    <div>
      <img src={img} alt="" />
      <h3>{deploy}</h3>
      <p>{texts}</p>
    </div>
  )
}
