import { useState } from "react"
import { createCardStack } from "../../utils/api"
import { useNavigate } from "react-router-dom"

export default function AddCardStack() {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        title: '',
        category: ''
    })


    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        createCardStack(formData)
        navigate('/')
        
        
    }

    return(
        <>
        <form>
            <div className="form-group">
                <label htmlFor='title'>Stack Name</label>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={formData.title} />
                <label htmlFor='title'>Category</label>
                <input
                    type='text'
                    name='category'
                    onChange={handleChange}
                    value={formData.category} />
               <button onClick={(e) => handleSubmit(e,formData)}>Create!</button>
            </div>
        </form>
        </>
    )
}