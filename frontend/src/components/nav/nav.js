import { Link } from "react-router-dom"
import { login } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './nav.css'

export default function Nav(props) {
    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        username: 'tannerschmiedl',
        password: 'tanner'
    })


    const handleLogOut = () => {
        localStorage.clear()
        props.setIsLoggedIn(false)
        props.setCardStacks([])
      }

    const demo = () => {
        login(formData)
            .then((data) => {
                localStorage.token = data.token;
                props.setIsLoggedIn(true);
                navigate('/');
            })
            .catch((error) => {
                alert("Incorrect login credentials. Please try again.");
            });
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
    
        <Link to='/signup' className="nav-item btn">Sign Up</Link>
        <Link to='/login' className="nav-item btn">Login</Link>
        <Link onClick={demo} className="nav-item btn">Run a Demo</Link>
    
    </nav>
    }   

    </>
    )
}