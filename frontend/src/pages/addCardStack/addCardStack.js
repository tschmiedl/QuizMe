import { useState } from "react"
import { createCardStack } from "../../utils/api"


export default function AddCardStack() {
    
    
    const [formData, setFormData] = useState({
        title: '',
        category: ''
    })


    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        createCardStack(formData)
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