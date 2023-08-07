// Card.js
import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'; 
import axios from 'axios';

const UserList =() =>{

const [users, setUsers]= useState([]);

useEffect(()=>{

axios 
.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  setUsers(response.data)
  console.log(response.data);
})
  .catch((error)=>{
    console.log('erroe', error)
  })
}, [])



return (

<div  className='container'>

<h5 className='userlist'>Users_List</h5>
<div className='row'>
{users.length > 0 ? (
          users.map((user) => (
<div key={user.id} className='col-md-6 mt-3'>

<div className='card custom-card'>
<div className='card-body'>
<b className='card-title'>{user.name}</b>
<p className='card-text'>Username :{user.username}</p>
<p className='card-text'>Email{user.email}</p>
<address>

                    <p className='card-text'>Address: {user.address.street}</p>
                    <p className='card-text'>suite: {user.address.suite}</p>
                    <p className='card-text'>city: {user.address.city}</p>
                    <p className='card-text'>zipcode: {user.address.zipcode}</p>


</address>
</div>

</div>
</div>

    
))
) : (
  <p className='loader'>Loading_Users_Data...</p>
)}
       


</div>
</div>

);
          };


export default UserList;

