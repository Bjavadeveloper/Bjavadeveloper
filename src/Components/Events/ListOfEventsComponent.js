import React, {useState, useEffect} from 'react';
import './index.css'
import EventItem from '../EventItem/index';
import Event from '../EventCards/Event';
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails';

function ListOfEventsComponent() {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        // Make the API request
        fetch('http://localhost:8084/api/v1/events/list')
            .then(response => response.json())
            .then(data => {
                setEvents(data); // Update state with API response data
            });
    }, []);

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-danger header">
          <span className="span"><h2 className="fas fa-headphones-alt"></h2></span>
          <div className="container-fluid">
            <h3>Brillio Events</h3>
            {/* <button><h3><i class="fas fa-user bg-light"></i></h3></button> */}
            
            </div>
            </nav>
    
        <div className='container bg-secondary'>
          <div className='row'>
          {
          events.map(eachEvent => (
          <EventItem
            key={eachEvent.id}
            data={eachEvent}/>
          ))
          }
          </div>
          </div>

          <div>
        <div className="footer">
          <h4>Brillio &copy; copyright </h4>
        </div>
      </div>
          </div>
    );
}

export default ListOfEventsComponent;
