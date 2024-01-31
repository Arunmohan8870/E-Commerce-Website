import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Card(props) {
    const navigate = useNavigate();
    return (
       
            <div className='card m-4' role='button' onClick={() => navigate(`/Product/${props.id}`)} >
                <div className=' '>
                    <img src={props.url} height={190} width={230} alt="" />
                </div>
                <div className='card-details'>
                    <h4>{props.category}</h4>
                    <p>Upto {props.discount}% off</p>
                    <h6>{props.seller}</h6>
                    <h3>${props.price}</h3>
                    {props.stock > 0 ? (
                        <>
                            <button className='btn btn-success' >Available</button>
                        </>) :
                        <button className='btn btn-outline-danger'>Out of stock</button>}
                </div>
            </div>
        
    )
}