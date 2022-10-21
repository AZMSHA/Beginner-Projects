import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"

function Nav() {
    return (
        <nav>
            <h1>AZMSHA</h1>
            <div id="navLinks">
                <Link id="navlink" to="tours">Tours</Link>
                <Link id="navlink" to="accordian">Accordian</Link>
                <Link id="navlink" to="/birthday-reminder">Reminder</Link>
                <Link id="navlink" to="/reviews">Reviews</Link>
                <Link id="navlink" to="/stripe">Stripe</Link>
            </div>
        </nav>
    )
}

export default Nav