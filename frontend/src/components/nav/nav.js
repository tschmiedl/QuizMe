import { Link } from "react-router-dom"
import './nav.css'

export default function Nav(props) {

    return(
    <>
    {props.isLoggedIn ? 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </div>
    </nav>
    : 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to='/' className="nav-item btn">Home</Link>
        <Link to='/account' className="nav-item btn">Account</Link>
    </nav>
    }   

    </>
    )
}