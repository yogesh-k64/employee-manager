import React from 'react'
import avatar from './media/avatar.png'
import './EmployeeCard.css'

function EmployeeCard(props) {
    const name = props.name || 'User'
    const phone = props.phone || 'xxx-xxx-xxxx'
    const mail = props.email || 'example@mail.com'
    const dateOfBirth = props.dateOfBirth || 'dd-mm-yyyy'
    const address = props.address || '325, address 1, address 2'
    const id = props.id
    // debugger

  return (
    <div id="card-layout">
        <div className="card ">
            <div className="d-flex">
            <div className="left-flex">
                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="header txt-color">{name}</span>
                </div>
                <div className="d-flex contact-details">
                    <div className="flex-50 margin-topdown">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="txt-color">{phone}</span>
                    </div>
                    <div className="flex-50 margin-topdown">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span className="txt-color">{mail}</span>
                    </div>
                    <div className="flex-100 margin-topdown">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span className="txt-color">{dateOfBirth}</span>
                    </div>
                    <div className="flex-100 margin-topdown">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span className="txt-color">{address}</span>
                    </div>
                </div>
                
            </div>

            <div className="right-flex">
                <img src={avatar} alt="Profile Image" width="85px"/>
            </div>
        </div>
            <div className="margin-topbottom button-container">
                <button className="btns edit-btn" onClick={()=>props.edit(props)} >EDIT</button>
                <button className="btns delete-btn" onClick={()=>props.del(id)} >DELETE</button>
            </div>
        </div>
       
    </div>
  )
}

export default EmployeeCard