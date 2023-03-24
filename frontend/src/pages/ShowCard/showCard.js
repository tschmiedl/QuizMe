import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CurrentCard from "../../components/currentCard/currentCard"
import { getCardsinStack } from "../../utils/api"
import { deleteOneCard } from "../../utils/api"
import nexticon from "./assets/next-28.svg"
import previcon from "./assets/prev.svg"
import addcard from "./assets/add_24px.svg"
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
    <div className="cardPage">
        
        <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20}}
        >
         <Link to={"/new/" + stackid} className="addCardLink">
            <img src={addcard} alt="Add A Card" id="addCardIcon"/>
         </Link>
         
         </motion.div> 
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
    
    <motion.img 
    className="moveButton"
    src={previcon}
    whileHover={{ scale: 1.1 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    whileTap={{ scale: 0.9}}
    onClick={prevCard}>
    </motion.img> 

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
 
    <motion.img
    src={nexticon}
    className="moveButton"
    whileHover={{ scale: 1.1 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    whileTap={{ scale: 0.9}}
    onClick={nextCard}>
    </motion.img>

    </motion.div>
    </div>
    : 
    <div>
        <Link to={"/new/" + stackid} className="addCardLink">Add a card to get started!</Link>
    </div>
    }
    </>
   )
}

