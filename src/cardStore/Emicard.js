import React, { Fragment } from "react";
import MetaData from "../componets/MetaData";
export default function Emicard() {
  return (
    <Fragment>
      <MetaData title={"EMI CARD "} />
      <div className="form-details">
        <form className="form">
          <div className="emicard-details">
            <div className="emicard-detail">
              <h4>EMI Application Form </h4>

              <label>PAN Card No </label>
              <input type="text" placeholder="PAN " />
              <label>Name of card holder </label>
              <input type="number" placeholder="Name" />
              <label> Email ID </label>
              <input type="email" placeholder="Email" />
              <label>Credit Card No </label>
              <input type="number" placeholder="Credit No" />
              <label>Date of birth </label>
              <input type="DATE" placeholder="DOB" />

              <button value="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
