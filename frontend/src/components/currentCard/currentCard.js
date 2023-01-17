import { useEffect, useState } from "react"


export default function CurrentCard(props) {
    const [card, setCard] = useState({})
    
    const [formShow, setFromShow] = useState(false)
    const [formData, setFormData] = useState({
        title: card.title,
        hint: card.hint,
        answer: card.answer
    })

    useEffect(() => {
        setCard(props.cardsInStack[props.currentCard])
        
    },[props])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    
    
    return(
        <>
        {formShow ? 
            <form>
                <label htmlFor="title">Title</label>
                <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        value={formData.title} />
            </form> 
        : 
            <div className="card mx-auto">
                    <div className="card-title">{card.title}</div>
                    {props.hintShow ? 
                    <div className="card-text">{card.hint}</div>
                    :
                    
                    <button className="card-link" onClick={() => {props.setHintShow(true)}}>Hint</button>}
                    {props.answerShow ? 
                    <div className="card-text">{card.answer}</div>
                    :
                    <button className="card-link" onClick={() => {props.setAnswerShow(true)}}>Answer</button>}
                    <button className="card-link" onClick={() => {setFromShow(true)}}>Edit</button>
            </div>}
        </>
        
    )
}