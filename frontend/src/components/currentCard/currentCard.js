import { useEffect, useState } from "react"


export default function CurrentCard(props) {
    const [card, setCard] = useState({})
    
    const [formShow, setFromShow] = useState(false)
    

    useEffect(() => {
        setCard(props.cardsInStack[props.currentCard])
        
    },[props])

    

    
    
    return(
        <>
        {formShow ? 
            <h1>Form goes here</h1>  
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