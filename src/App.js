import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import Shop from './components/Shop/Shop';

function App() {
const [users,setUser] = useState([]);
const [selectedUsers, setSelectedUsers] = useState([]);
  useEffect(()=>{
    fetch("http://www.json-generator.com/api/json/get/cpYLDcCGyG?indent=2")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  const addUsersHandler = (user)=>{
  // console.log("it's working",user);
  const newUser = [...selectedUsers, user];
    setSelectedUsers(newUser);
    // console.log(newUser);
    // console.log(selectedUsers);
}
  return (
    <div className = 'container'>
      <div className="user-container">
      <h1>total users: {users.length}</h1>
      {
        users.map(user =><Users name={user} key={user.id} addUsersHandler = {addUsersHandler} ></Users>)
      }
      </div>
      <div className="cart-container">
      <Shop selectedUser = {selectedUsers} ></Shop>
      </div>
    </div>
  );
}

export default App;
