import React, { Fragment, useState } from "react";
import FormContainer from "./FormContainer";
import "./App.css";
import EmployeeList from "./EmployeeList";
import EmployeeCard from "./EmployeeCard";
import "./FormContainer.css";
import formImage from "./media/image1.png";

function App() {
  const [employeeList, setemployeeList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
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

  const addEmployee = () => {
    const person = { ...details, id: Date.now() };
    // props.add(person)
    setemployeeList((list) => [...list, person]);
    setDetails({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      dob: "",
      address: "",
    });
  };

  // const add=(employee)=>{
  //   setemployeeList(list=>[...list,employee])
  // }

  const removeEmployee = (id) => {
    // debugger
    setemployeeList((list) => list.filter((emp) => emp.id !== id));
  };

  const editEmployee = (details) => {
    console.log(details);

    //   {
    //     "id": 1672809435868,
    //     "name": " ",
    //     "phone": "",
    //     "dateOfBirth": "",
    //     "email": "",
    //     "address": ""
    // }

    let name = details.name.split(" ");
    setDetails({
      fname: name[0],
      lname: name[1],
      phone: details.phone,
      email: details.email,
      dob: details.dateOfBirth,
      address: details.address,
      id: details.id,
    });

    setIsEdit(true);
  };

  const update = () => {
    setemployeeList((list) => {
      const indexOfEmployee = list.findIndex((emp) => emp.id === details.id);
      const copyList = [...list];
      copyList[indexOfEmployee] = details;
      return copyList;
    });
    setDetails({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      dob: "",
      address: "",
    });
    setIsEdit(false);
  };

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <div className="App">
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
              <input
                type={"text"}
                className="name"
                placeholder="Account Number"
              />
              <input type={"text"} className="name" placeholder="IFSC Code" />
            </div>
            <input type={"text"} className="address" placeholder="Bank Name" />
            <input type={"text"} className="address" placeholder="Brach Name" />
          </div>
          <div className="formFooter">
            {isEdit ? (
              <Fragment>
                <button style={{background:'#D64742'}} onClick={() => setIsEdit((val) => !val)}>Cancel</button>
                <button style={{background:'#4274BF'}} onClick={update}>Update</button>
              </Fragment>
            ) : (
              <button onClick={addEmployee}>Save</button>
            )}
          </div>
        </div>
        <EmployeeList
          list={employeeList}
          del={removeEmployee}
          edit={editEmployee}
        />
      </div>
    </div>
  );
}

export default App;
