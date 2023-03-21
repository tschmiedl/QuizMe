import { useState } from "react"
import { createCardStack } from "../../utils/api"


export default function AddCardStack(props) {
    
    
    const [formData, setFormData] = useState({
        title: '',
        category: ''
    })


    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        
        createCardStack(formData)
        setFormData({
            title: '',
            category: ''
        })
    }

    return(
        <>
        <form>
            <div className="form-group">
                <label htmlFor='title'>Stack Name</label>
                <input
                    className="form-control"
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={formData.title} />
                <label htmlFor='title'>Category</label>
                <input
                    className="form-control"
                    type='text'
                    name='category'
                    onChange={handleChange}
                    value={formData.category} />
               <button onClick={(e) => handleSubmit(e,formData)} className="createbtn">Create!</button>
            </div>
        </form>
        </>
    )
}