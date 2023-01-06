import React, { Fragment } from "react";
import people from "./media/employees-waves.gif";
import "./EmployeeList.css";
import EmployeeCard from "./EmployeeCard";

function EmployeeList(props) {
  const employeeList = props.list;
  console.log(employeeList)
  return (
    <div className="employeeContainer" style={{justifyContent: employeeList && employeeList.length ? 'flex-start' : 'center'}} >
      
      {employeeList && employeeList.length ? (
        employeeList.map((employee) => {

          const name = employee.fname + ' ' + employee.lname;
          console.log(employee)
          return (
            <EmployeeCard
              id={employee.id}
              name={name}
              phone={employee.phone}
              dateOfBirth={employee.dob}
              email={employee.email}
              address={employee.address}
              del={props.del}
              edit={props.edit}
            />
          );
        })
      ) : (
        <Fragment>
          <img className="people" src={people} />
          <span className="noEmployee">No Employee found</span>
        </Fragment>
      )}
    </div>
  );
}

export default EmployeeList;
