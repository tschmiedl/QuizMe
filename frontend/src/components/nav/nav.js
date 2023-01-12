import { Link } from "react-router-dom"
export default function Nav(props) {

    return(
    <>
    {props.isLoggedIn ? 
    <nav>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
    </nav>
    : 
    <nav>
        <Link to='/account'>Account</Link>
    </nav>
    }   

    </>
    )
}