import React from  "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import BirthdayReminder from "./pages/BirthdayReminder/main";
import Tours from "./pages/Tours/main";
import "./index.css"
import Accordian from "./pages/accordian/main";
import Nav from "./NavBar/nav";
import Reviews from "./pages/reviews"
import Stripe from "./pages/stripe-nav/stripeNav"

function App(){
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route index element={<>
        <h1 id="index">PROJECTS PAGE!<p>use the NavBar at the top to Navigate through the projects</p></h1></>}/>
        <Route path="/birthday-Reminder" element={<BirthdayReminder/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/accordian" element={<Accordian/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/stripe" element={<Stripe/>}/>
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById("root")).render(<App/>)