import './index.css'
import React, {useState}from 'react'

function EventItem(props) {

  const [user,setUser]=useState('')
  const [error,setError]=useState(null)

  function hello(){
    // alert(props.data.id)
    // console.log(localStorage.empId)

    const var1= localStorage.empId

    console.log(var1)

    const var3= props.data.id
    console.log(var3)
  
  fetch(`http://localhost:8084/api/v1/events/find/${var1}/${var3}`)
  .then(response => {
    if (!response.status==401) {
      throw new Error("Error Occured")
    }
    return response.json(); // Process the response data if successful
  })
  .then(data => {
    console.log("Inside the successfull");
    alert("Registration for this event done successfully");
  }).catch(error=>alert("Already Registered"));
    // setUser(props.key);
    // alert("ID: ",user);
    
  }

  return (
    
    <div className='col-md-6 mt-2 text-center'>
    <ul className='no-bullets'>
    <li >
      <button type="button" className="event-button" onClick={hello}>
         <img src={props.data.imageUrl} className='event-image' alt="event"/> 
      </button>
      <p className="name">{props.data.eventName}</p>
      <p className="location">{props.data.location}</p>
      <p className="location">{props.data.eventDateTime}</p>
      <p className="location">{props.data.participations}</p>
      <p className="location">{props.data.instructions}</p> 
    </li>
    </ul>
    </div>
  )
}

export default EventItem
