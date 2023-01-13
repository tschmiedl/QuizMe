import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../utils/api"

export default function Login(props) {
    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    // update the input value as a user types
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        // Prevent page from reloading
          event.preventDefault()
          // Deconstructing data to set the local storage token equal to the token we created in our login route
          login(formData)
              .then((data) => {localStorage.token = data.token})
          // Sets our loggedin state (passed down in props to true)
          props.setIsLoggedIn(true)
          navigate('/')
          
      }

    return(
        <div className="container">
            <h2>Log In</h2>

            <form>
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formData.username} />
                </div>

                <div className="input-text">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formData.password} />
                </div>

                <button onClick={(e) => handleSubmit(e,formData)}>Log In</button>
            </form>
        </div>
    )

}
