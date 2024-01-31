import React from 'react'

export default function Card6(props) {
  return (
    <div className='main-phone'>
      <img src={props.url} width={70} height={70} alt="" />
      <h6>{props.name}</h6>
    </div>
  )
}