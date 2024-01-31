import React from "react"
import { lapitems } from '../laptop/Lap-product.js'
import Card5 from "../cards/Card5"

export default function lap() {
  return (
    <div className="product-list">
      {lapitems.map((Product) => <Card5 {...Product} />)}
    </div>
  )
}  