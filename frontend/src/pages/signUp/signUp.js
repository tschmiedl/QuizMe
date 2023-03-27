import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signUp } from "../../utils/api"

export default function SignUp(props) {
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
          signUp(formData)
              .then((data) => {
                localStorage.token = data.token;
                props.setIsLoggedIn(true);
                navigate('/');
            })
            .catch((error) => {
                alert("That username already exists");
            });
      }

    return(
        <div className="container">
            <h2 className="actionh2">Sign Up</h2>
            
            <form>
                <div className="form-group">

                    <label htmlFor='username' className="actionlabels">Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formData.username} />
                </div>

                <div className="form-group">
                    <label htmlFor='password' className="actionlabels">Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formData.password} />
                </div>

                <button className="LorS" onClick={(e) => handleSubmit(e,formData)}>Sign Up!</button>
            </form>
        </div>
    )

}
