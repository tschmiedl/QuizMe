import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CurrentCard from "../../components/currentCard/currentCard"
import { getCardsinStack } from "../../utils/api"


export default function ShowCard() {
    const [cardsInStack, setCardsInStack] = useState([])
    const [currentCard, setCurrentCard] = useState(0)
    const [cardsExist, setCardsExist] = useState(false)

    const { stackid } = useParams()
    
    
    useEffect(() => {
        getCardsinStack(stackid).then(data => { 
            if (data.cards.length > 0) {
                setCardsInStack(data.cards)
                setCardsExist(true)
            } else {
                setCardsExist(false)
            }
        })
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
    {cardsExist ? 
    <div className="showCard">
    <button onClick={prevCard}>Prev card</button>
    <CurrentCard currentCard={currentCard} cardsInStack={cardsInStack}/>
    <button onClick={nextCard}>next card</button>
    </div>
    : 
    <div>
        <Link to={"/" + stackid + '/new'}>Add a card to get started!</Link>
    </div>
    }
    </>
   )
}

