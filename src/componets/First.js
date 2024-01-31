import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  return (

    <nav className="navbar row">
      <div className="col-12 col-md-3">

        <img src="/images/logo7.png" width={220} />

      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">

          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>

      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className="btn" id="login_btn" onClick={() => navigate('/')} >Home</button>
        <button className="btn" id="login_btn" onClick={() => navigate('/Login')}>Login</button>
        {/* <button className="bt ml-2" id="login_btn" onClick={()=> navigate('/Admin')}>A</button> */}

        <span className="ml-4" id="cart_count" onClick={() => navigate('/Admin')}> A</span>
      </div>

    </nav>




  )
}