import { useEffect, useState } from "react"
import { updateOneCard } from "../../utils/api"
import { motion } from "framer-motion"

export default function CurrentCard(props) {
    const [card, setCard] = useState({})
    const [swipe, setSwipe] = useState()

    const [formShow, setFromShow] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        hint: '',
        answer: ''
    })

    useEffect(() => {
        setCard(props.cardsInStack[props.currentCard])
        setFormData(props.cardsInStack[props.currentCard])
        setFromShow(false)
    },[props])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const editCard = (stackId, cardId, formData) => {
        updateOneCard(stackId, cardId, formData).then((data) => {
            props.setCardsInStack(data.cards)
        })
        setFromShow(false)
    }
    
    const cancelEdit = () => {
        setFromShow(false)
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
                <button type="button" onClick={() => {editCard(props.stackid, card._id, formData)}}>Submit</button>
                <button type="button" onClick={() => {cancelEdit()}}>Cancel</button>
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
            onDragEnd={(event, info) => {
                setSwipe(info.point.x)
                if (swipe < info.point.x) {
                    props.nextCard()
                }
                else {
                    props.prevCard()
                }    
            }}
            >
                    <div 
                    className="card-title">{card.title}</div>
                    {props.hintShow ? 
                    <div className="card-text">{card.hint}</div>
                    :
                    
                        <button className="stateShow" onClick={() => {props.setHintShow(true)}}>Hint</button>}
                    {props.answerShow ? 
                    <div className="card-text">{card.answer}</div>
                    :
                    
                    <button className="stateShow" onClick={() => {props.setAnswerShow(true)}}>Answer</button>}
                    <div>
                        <button className="card-link" onClick={() => {setFromShow(true)}}>Edit</button>
                        <button className="card-link" onClick={() => {props.deleteCard(props.stackid, card._id)}}>Delete</button>
                    </div>
            </motion.div>}
        </motion.div>
        
    )
}