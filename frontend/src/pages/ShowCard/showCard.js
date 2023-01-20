import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CurrentCard from "../../components/currentCard/currentCard"
import { getCardsinStack } from "../../utils/api"
import { deleteOneCard } from "../../utils/api"

import { motion } from "framer-motion"

export default function ShowCard(props) {
    const [cardsInStack, setCardsInStack] = useState([])
    const [currentCard, setCurrentCard] = useState(0)
    const [cardsExist, setCardsExist] = useState(false)
    const [hintShow, setHintShow] = useState(false)
    const [answerShow, setAnswerShow] = useState(false)

    const { stackid } = useParams()
    

    useEffect(() => {
        getCardsinStack(stackid).then((data) => { 
            
            if (data.cards.length > 0) {
                setCardsInStack(data.cards)
                setCardsExist(true)  
            } else {
                
                setCardsExist(false)
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
    
    const deleteCard = async (stackId,cardId) => {
        const data = await deleteOneCard(stackId, cardId)
        
        if (data.cards.length >= 1) {
                console.log(data.cards)
                setCardsInStack(data.cards)
                setCurrentCard(0)
                setCardsExist(true)  
                nextCard()
        } 
        else {
                setCurrentCard(0)
                setCardsExist(false)
            }
        
        }
    
    
    
   
   return(
    <>
    {cardsExist ? 
    <div>
         <Link to={"/" + stackid} className="addCardLink">Add a Card</Link>
         
    <motion.div 
    className="showCard"
    initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.5,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    <motion.button 
    className="moveButton"
    whileHover={{ scale: 1.1 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    whileTap={{ scale: 0.9}}
    onClick={prevCard}>Prev</motion.button>

    <CurrentCard 
        currentCard={currentCard} 
        cardsInStack={cardsInStack}
        setCardsInStack={setCardsInStack} 
        hintShow={hintShow} 
        answerShow={answerShow} 
        setAnswerShow={setAnswerShow} 
        setHintShow={setHintShow}
        stackid={stackid}
        deleteCard={deleteCard}
        nextCard={nextCard}
        prevCard={prevCard}
        />
    <motion.button 
    className="moveButton"
    whileHover={{ scale: 1.1 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    whileTap={{ scale: 0.9}}
    onClick={nextCard}>Next</motion.button>
    </motion.div>
    </div>
    : 
    <div>
        <Link to={"/" + stackid} className="addCardLink">Add a card to get started!</Link>
    </div>
    }
    </>
   )
}

