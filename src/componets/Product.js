import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { productList } from './products';
export default function Product() {

  const AlertCard = (e) => {
    const values = e.target.value;
    if (values === "") {
      alert(`
             
                              Added to Cart 🛒💨💫`)
    }
  }
  const params = useParams();
  const navigate = useNavigate();
  const props = productList.find((element) => element.id === parseInt(params.id));
  return (

    <div className='card-1 m-5'   >
      <div className='image'>
        <img src={props.url} height={450} width={500} alt="" />
      </div>
      <div className='card-details-1 ml-5'>
        <h4>{props.category}</h4>
        <h2>{props.discription}</h2>
        <p id='center'>Upto {props.discount}% off</p>
        <h6>{props.seller}</h6>
        <h3>${props.price}</h3>


        {props.stock > 0 ? (
          <>
            <button className='btn btn-success' onClick={() => navigate('/success')}>Buy Now</button>
            <button className='btn btn-warning ml-3' onClick={AlertCard} > Add to Card</button>
          </>) :
          <button className='btn btn-outline-danger'>Out of stock</button>}

      </div>
    </div>
  )
}


