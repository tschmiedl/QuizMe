import { useState } from "react"
import { useParams } from "react-router-dom"
import { addOneCard } from "../../utils/api"
export default function AddOneCard() {
    const [formData, setFormData] = useState({
        title: '',
        hint: '',
        answer: ''
    })

    const { stackid } = useParams()

    console.log(stackid)
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        
        addOneCard(stackid, formData)
        
    }

    

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Question / Word</label>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={formData.title} />
                <label htmlFor="hint">Hint</label>
                <input
                    type='text'
                    name='hint'
                    onChange={handleChange}
                    value={formData.hint} />
                <label htmlFor="answer">Answer</label>
                <input
                    type='answer'
                    name='answer'
                    onChange={handleChange}
                    value={formData.answer} />
                <button type="submit">Create!</button>
            </div>
        </form>
    )
}