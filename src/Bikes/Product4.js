import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {Bikesproduct } from './Bikesproduct'
export default function Product4() {
    const AlertCard = (e) => {
        const values = e.target.value;
        if (values === "") {
            alert(`
                 
                                  Added to Cart 🛒💨💫`)
        }
    }

    const params = useParams();
    const navigate = useNavigate();
    const prop = Bikesproduct.find((element) => element.id === parseInt(params.id))
    return (


        <div className='card-1 m-5'   >
            <div className='image'>
                <img src={prop.url} height={450} width={500} alt="" />
            </div>
            <div className='card-details-1 ml-5'>
                <h4>{prop.category}</h4>
                <h2>{prop.discription}</h2>
                <p id='center'>Upto {prop.discount}% off</p>
                <h6>{prop.seller}</h6>
                <h3>${prop.price}</h3>


                {prop.stock > 0 ? (
                    <>
                        <button className='btn btn-success' onClick={() => navigate('/success')}>Buy Now</button>
                        <button className='btn btn-warning ml-3' onClick={()=> navigate('/Emicard')} > EMI option</button>
                    </>) :
                    <button className='btn btn-outline-danger'>Out of stock</button>}

            </div>
        </div>
    )
}

