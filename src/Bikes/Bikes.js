import React from 'react'
import { Bikesproduct } from './Bikesproduct'
import Card7 from '../cards/Card7'

export default function Bikes() {
  return (
    <div>
     {Bikesproduct.map((product)=> < Card7 {...product} />)}
    </div>
  )
}
