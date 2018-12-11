import React from 'react'
import { Link, NavLink,withRouter} from 'react-router-dom'
const Navbar = (props) => {
    //this is programmatic redirects using the withRouter which act as the function
    //setTimeout(() => {
    //    props.history.push('/')
    //  },5000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <Link to="https://www.google.com" class="brand-logo">poke Time's</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);