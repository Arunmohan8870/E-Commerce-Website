import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export default function Card7(props) {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div className='phone-contain d flex '>
            <div className='phone-container1' role='button' onClick={() => navigate(`/Product4/${props.id}`)} >
                <div className='phone-image'>
                    <img src={props.url} height={400} width={400} alt="" />
                </div>
                <div className='phone-details'>
                    <h5>{props.category}</h5>
                    <a href="#">{props.discription}</a>

                    <p id='center'>Upto {props.discount}% off</p>
                    <h6>{props.seller}</h6>
                    <h3>${props.price}</h3>


                    {props.stock > 0 ? (
                        <>
                            <button className='btn btn-success'>Available</button>

                        </>) :
                        <button className='btn btn-outline-danger'>Out of stock</button>} <br />
                    <button className='btn btn-warning' > Add To Card </button>
                    <hr />
                </div>
            </div>
        </div>
    )
}