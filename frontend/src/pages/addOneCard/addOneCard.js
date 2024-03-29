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

    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addOneCard(stackid, formData).then(setFormData({
            title: '',
            hint: '',
            answer: ''
        }))
        
    }

    

    return(
        <form>
            <div className="form-group">
                <label htmlFor="title" className="labels">Question / Word</label>
                <input
                    type='text'
                    className="form-control"
                    name='title'
                    onChange={handleChange}
                    value={formData.title} />
                <label htmlFor="hint" className="labels">Hint</label>
                <input
                    type='text'
                    className="form-control"
                    name='hint'
                    onChange={handleChange}
                    value={formData.hint} />
                <label htmlFor="answer" className="labels">Answer</label>
                <input
                    type='text'
                    className="form-control"
                    name='answer'
                    onChange={handleChange}
                    value={formData.answer} />
                <button onClick={handleSubmit} className="createbtn">Create!</button>
            </div>
        </form>
    )
}