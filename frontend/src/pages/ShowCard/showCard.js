import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCardsinStack } from "../../utils/api"


export default function ShowCard() {
    const [cardsInStack, setCardsInStack] = useState([])
    const [currentCard, setCurrentCard] = useState({})

    const { stackid } = useParams()
    

    useEffect(() => {
        getCardsinStack(stackid).then(data => setCardsInStack(data.cards))
    }, [])

    console.log(cardsInStack[0])
    return(
        <h1>Test</h1>
    )
}