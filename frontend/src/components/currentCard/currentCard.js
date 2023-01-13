import { useEffect, useState } from "react"


export default function CurrentCard(props) {
    const [card, setCard] = useState({})
    
    useEffect(() => {
        setCard(props.cardsInStack[props.currentCard])
    },[props])

    console.log(card)
    return(
        
                <div className="card mx-auto">
                    <div className="card-title">{card.title}</div>
                </div>
        
    )
}