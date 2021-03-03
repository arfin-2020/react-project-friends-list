import React from 'react';
import './Shop.css'
const Shop = (props) => {
    // console.log(props);
    const selectedUser = props.selectedUser;
    return (
        <div className ="cart">
            <h3> Selected Members {selectedUser.length}</h3>
            {
                selectedUser.map((user) =>
                <div className = 'cart-info'>
                User Name: {user.name} 
               <br/> Email: {user.email}
                <img src={user.image} alt="googleImage"/>
                </div>)
            }
        </div>
    );
};

export default Shop;