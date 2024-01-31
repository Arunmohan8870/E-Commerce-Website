import React, { Fragment } from "react";
import MetaData from './MetaData';
import { productList } from "./products"
import Card from "../cards/Card"
import { useNavigate } from "react-router-dom";
import { productListItems } from "../items/Categories";
import Card3 from "../cards/Card3";
import { laptopsitem } from "../laptop/laptopsitem";
import Card4 from "../cards/Card4";
import { Bikesitem } from "../Bikes/Bikesitem";
// import Card6 from "../cards/Card6";

export default function Second() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <MetaData title={`Best Products`} />

{/*  Categories  */}

      <div className="class d-flex justify-content-center ">

     {/*  Phones list */}

        <div className="circle d-flex mt-2 flex-wrap justify-content-center " role="button" onClick={() => navigate('/phone')}>
          {productListItems.map((items) => <Card3 {...items} />)}

          {/* <img src="./images/admin2.jpg" width={70} height={70}  alt=""  role="button" onClick={()=> navigate('/phone')}/>
         
         <img src="./images/admins.jpg" width={70}  height={70}  alt=""role="button" />
         <img src="./images/admin3.jpg" width={70}  height={70}  alt=""role="button" />  */}

     {/*  Laptops list */}

        </div>
        <div className="circle d-flex mt-2 flex-wrap justify-content-center " role="button" onClick={() => navigate('/lap')}>
          {laptopsitem.map((items) => <Card4 {...items} />)}
        </div>

    {/*  Bikes list */}

        <div className="circle d-flex mt-2 flex-wrap justify-content-center " role="button" onClick={() => navigate('/Bikes')} >
          {Bikesitem.map((items) =>{
              return (
                <div className='main-phone'>
                  <img src={items.url} width={70} height={70} alt="" />
                  <h6>{items.name}</h6>
                </div>
              )
          })}
        </div>
      </div>
      <p className="Latest-Product">Latest Product</p>

    {/* All  Products List  */}

      <div className="product d-flex flex-wrap justify-content-center ">
        {productList.map((Product) => <Card {...Product} />)}
      </div>
    </Fragment>
  )



}