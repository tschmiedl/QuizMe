import { useNavigate } from "react-router-dom"

export default function AccountPage(props) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        props.setIsLoggedIn(false)
        navigate('/')
        
      }

    return(
        <button onClick={handleLogOut}>Log Out</button>
    )
}