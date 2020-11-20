import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";


import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import BookLanding from "./pages/Booking/Landing";
import BookAddress from "./pages/Booking/Address";
import BookCalendar from "./pages/Booking/Calendar";
import Footer from './components/Footer/Footer';
import LeftNav from './components/NavBar/LeftDrawer'

function App() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "TX",
    zip: "",
    option1: "",
    plan: "",
  });
  const [coordinates, setCoordinates] = useState({
    start: {
      lat: 29.760427,
      lng: -95.369804,
    },
    end: {
      lat: 29.760427,
      lng: -95.369804,
    },
  });
  const [distance, setDistance] = useState(0);

  return (
    <div className="App">
      <LeftNav />

        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/booking/address">
            <BookAddress coordinates={coordinates} setCoordinates={setCoordinates} setDistance={setDistance} input={input} setInput={setInput}/>
          </Route>
          <Route path="/booking/calendar">
            <BookCalendar input={input} />
          </Route>
          <Route path="/booking">
            <BookLanding />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch> 
      <Footer />
    </div>
  );
}

export default App;
