import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CurrentCard from "../../components/currentCard/currentCard"
import { getCardsinStack } from "../../utils/api"


export default function ShowCard() {
    const [cardsInStack, setCardsInStack] = useState([])
    const [currentCard, setCurrentCard] = useState(0)

    const { stackid } = useParams()
    
    
    useEffect(() => {
        getCardsinStack(stackid).then(data => setCardsInStack(data.cards))
    }, [stackid])

    
    const nextCard = () => {
        if (currentCard < cardsInStack.length - 1) {
            setCurrentCard(currentCard +1)
        }
        else {
            setCurrentCard(0)
        }
    }

    
    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard -1)
        }
        else {
            setCurrentCard(cardsInStack.length -1)
        }
    }
    console.log(cardsInStack[currentCard])
   
   return(
    <>
    <button onClick={prevCard}>Prev card</button>
    <CurrentCard currentCard={currentCard} cardsInStack={cardsInStack}/>
    <button onClick={nextCard}>next card</button>
    </>
   )
}

