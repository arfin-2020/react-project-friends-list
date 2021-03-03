import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'

    const Users = (props) => {
    // console.log(props);
    const {name,email,phone,image} = props.name;
    const [mobile,setMobile] = useState("");
    const [emailAddress,setEmail] = useState("");
   const showEmail = () => setEmail(email);
   const showPhoneNumber = () =>setMobile(phone);
    return (
        <div className = "users">
        <div className="image-container">
        <img src={image} alt=""/>
        </div>
          <div className="userInformation-container">
          <h3> User Name: {name}</h3>  
          <p> Email No: {emailAddress}</p>
          <button onClick = {showEmail}  className ="main-button"> show email</button>
          <p> Phone No: {mobile}</p>
          <button onClick ={showPhoneNumber}  className ="main-button">Show phone no</button><br/> <br/>
          <button onClick={()=>props.addUsersHandler(props.name)} className ="main-button"> <FontAwesomeIcon icon={faPlus} /> Add to click</button>
          </div>
          
        </div>
    );
};

export default Users;