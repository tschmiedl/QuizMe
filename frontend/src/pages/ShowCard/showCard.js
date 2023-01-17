import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CurrentCard from "../../components/currentCard/currentCard"
import { getCardsinStack } from "../../utils/api"


export default function ShowCard(props) {
    const [cardsInStack, setCardsInStack] = useState([])
    const [currentCard, setCurrentCard] = useState(0)
    const [cardsExist, setCardsExist] = useState(false)
    const [hintShow, setHintShow] = useState(false)
    const [answerShow, setAnswerShow] = useState(false)

    const { stackid } = useParams()
    
    
    useEffect(() => {
        getCardsinStack(stackid).then(data => { 
            if (!data.cards.data) {
                setCardsInStack(data.cards)
                
            } else {
                setCardsInStack(data.cards)
                setCardsExist(true)
            }
        })
    }, [])

    
    const nextCard = () => {
        if (currentCard < cardsInStack.length - 1) {
            setCurrentCard(currentCard +1)
            setHintShow(false)
            setAnswerShow(false)
        }
        else {
            setCurrentCard(0)
            setHintShow(false)
            setAnswerShow(false)
        }
    }

    
    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard -1)
            setHintShow(false)
        }
        else {
            setCurrentCard(cardsInStack.length -1)
            setHintShow(false)
        }
    }
    
   
   return(
    <>
    {cardsExist ? 
    <div>
         <Link to={"/" + stackid + '/new'}>Add a Card</Link>
    <div className="showCard">
    <button onClick={prevCard}>Prev card</button>
    <CurrentCard 
        currentCard={currentCard} 
        cardsInStack={cardsInStack} 
        hintShow={hintShow} 
        answerShow={answerShow} 
        setAnswerShow={setAnswerShow} 
        setHintShow={setHintShow}/>
    <button onClick={nextCard}>next card</button>
    </div>
    </div>
    : 
    <div>
        <Link to={"/" + stackid + '/new'}>Add a card to get started!</Link>
    </div>
    }
    </>
   )
}

