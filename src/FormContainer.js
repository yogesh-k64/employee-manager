import React, { useState } from "react";
import "./FormContainer.css";
import formImage from "./media/image1.png";

function FormContainer(props) {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });

  const changeDetailsHandler = (property, value) => {
    setDetails((dtl) => {
      return { ...dtl, [property]: value };
    });
  };

  const addEmployee=()=>{
    const person = {...details,id:Date.now()}
    props.add(person)
    setDetails({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
    address: "",})
  }

  

  return (
    <div className="formContainer">
      <div className="topBar">
        <span className="editHeading">Edit Employee</span>
        <img className="headerImage" src={formImage} />
      </div>
      <div className="formBody">
        <span className="detailHeading">Personal Details</span>
        <div className="nameContainer">
          <input
            type={"text"}
            className="name"
            placeholder="First Name"
            value={details.fname}
            onChange={(e) => changeDetailsHandler("fname", e.target.value)}
          />
          <input
            type={"text"}
            className="name"
            placeholder="Last Name"
            value={details.lname}
            onChange={(e) => changeDetailsHandler("lname", e.target.value)}
          />
        </div>
        <div className="nameContainer">
          <input
            type={"text"}
            className="phone"
            placeholder="Phone Number"
            value={details.phone}
            onChange={(e) => changeDetailsHandler("phone", e.target.value)}
          />
          <input
            type={"text"}
            style={{ width: "54%" }}
            placeholder="Email"
            value={details.email}
            onChange={(e) => changeDetailsHandler("email", e.target.value)}
          />
        </div>
        <input
          type={"text"}
          className="phone"
          placeholder="Date of Birth"
          value={details.dob}
          onChange={(e) => changeDetailsHandler("dob", e.target.value)}
        />
        <input
          type={"text"}
          className="address"
          placeholder="Address"
          value={details.address}
          onChange={(e) => changeDetailsHandler("address", e.target.value)}
        />
        <span className="detailHeading">Bank Details</span>
        <div className="nameContainer">
          <input type={"text"} className="name" placeholder="Account Number" />
          <input type={"text"} className="name" placeholder="IFSC Code" />
        </div>
        <input type={"text"} className="address" placeholder="Bank Name" />
        <input type={"text"} className="address" placeholder="Brach Name" />
      </div>
      <div className="formFooter">
        <button onClick={addEmployee} >Save</button>
      </div>
    </div>
  );
}

export default FormContainer;
