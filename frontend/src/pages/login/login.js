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
        event.preventDefault();
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
        <div className="container">
            <h2 className="actionh2">Log In</h2>

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

                <button className="LorS" onClick={(e) => handleSubmit(e,formData)}>Log In</button>
            </form>
        </div>
    )

}
