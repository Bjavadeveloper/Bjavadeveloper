import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register'
// import Events from './Components/Events';
import ListOfEventsComponent from './Components/Events/ListOfEventsComponent';

import Event from './Components/EventCards/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/events" element={<ListOfEventsComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
