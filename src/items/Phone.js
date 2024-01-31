

import { productListItem } from './Productphone'
import Card2 from "../cards/Card2"

export default function phone() { 
  return (
<div className="product-list">
        {productListItem.map((Product) => <Card2 {...Product} />)}
      </div>
  )}