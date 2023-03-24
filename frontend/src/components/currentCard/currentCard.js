import { useEffect, useState } from "react"
import { updateOneCard } from "../../utils/api"
import { motion } from "framer-motion"

export default function CurrentCard(props) {
    const [card, setCard] = useState({})
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const [formShow, setFormShow] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        hint: '',
        answer: ''
    })

    useEffect(() => {
        setCard(props.cardsInStack[props.currentCard])
        setFormData(props.cardsInStack[props.currentCard])
        setFormShow(false)
    },[props])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const editCard = (stackId, cardId, formData) => {
        updateOneCard(stackId, cardId, formData).then((data) => {
            props.setCardsInStack(data.cards)
        })
        setFormShow(false)
    }
    
    const cancelEdit = () => {
        setFormShow(false)
    }

    const editFunction = () => {
        setFormShow(true)
    }
    
    
    return(
        
        <motion.div>
        {formShow ? 
        <div className="card">
            <form>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                        type='text'
                        className="form-control"
                        name='title'
                        onChange={handleChange}
                        value={formData.title} />
                </div>
                <div className="form-group">
                <label htmlFor="hint">Hint</label>
                <input
                        type='text'
                        className="form-control"
                        name='hint'
                        onChange={handleChange}
                        value={formData.hint} />
                </div>
                <div className="form-group">
                <label htmlFor="answer">Answer</label>
                <input
                        type="text"
                        className="form-control"
                        name="answer"
                        onChange={handleChange}
                        value={formData.answer} />
                </div>
                <div className="submitCancel">
                <p onClick={() => {editCard(props.stackid, card._id, formData)}} className="editOptBtn">Submit</p>
                <p onClick={() => {cancelEdit()}} className="editOptBtn">Cancel</p>
                </div>
            </form> 
            </div>
        : 
            <motion.div 
            className="card"
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x:0}}
            drag="x"
            dragConstraints={{left: 0, right:0}}
            dragSnapToOrigin={true}
            onDragEnd={(event, {offset, velocity}) => {
                const swipe = swipePower(offset.x, velocity.x)
                
                if (swipe < -swipeConfidenceThreshold) {
                    props.nextCard()
                }
                else if (swipe > swipeConfidenceThreshold) {
                    props.prevCard()
                }    
            }}
            >
                    <div 
                    className="card-title">{card.title}</div>
                    {props.hintShow ? 
                    <motion.div 
                    className="card-text"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{delay:.1}}
                    >{card.hint}</motion.div>
                    :
                    
                        <button className="stateShow" onClick={() => {props.setHintShow(true)}}>Hint</button>}
                    {props.answerShow ? 
                    <motion.div 
                    className="card-text"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{delay:.1}}
                    >{card.answer}</motion.div>
                    :
                    
                    <button className="stateShow" onClick={() => {props.setAnswerShow(true)}}>Answer</button>}
                    <div className="submitCancel">
                        <p className="editOptBtn" onClick={() => {setFormShow(true)}}>Edit</p>
                        <p className="editOptBtn" onClick={() => {props.deleteCard(props.stackid, card._id)}}>Delete</p>
                    </div>
            </motion.div>}
        </motion.div>
        
    )
}