import { Link } from "react-router-dom"
export default function Nav() {

    return(
    <nav>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
    </nav>   
    )
}