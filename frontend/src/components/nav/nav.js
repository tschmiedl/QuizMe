import { Link } from "react-router-dom"
import './nav.css'

export default function Nav(props) {
    


    const handleLogOut = () => {
        localStorage.clear()
        props.setIsLoggedIn(false)
        props.setCardStacks([])
      }

    return(
    <>
    {props.isLoggedIn ? 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <Link to='/' className="nav-item btn">Home</Link>
    <Link to='/new' className="nav-item btn">New Stack</Link>
    <button onClick={handleLogOut} className="nav-item btn">Log Out</button>
    </nav>
    : 
    
    <nav 
    className="navbar navbar-expand-lg bg-body-tertiary"
    >
    <div className="container-fluid">
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
        <Link to='/demo'>Run a Demo</Link>
    </div>
    </nav>
    }   

    </>
    )
}