import { useEffect, useState } from "react"
import { getUserCardStacks } from "../../utils/api"

export default function ShowCardStack() {
    const [cardStacks, setCardStacks] = useState([])

    useEffect(() => {
        getUserCardStacks().then(data => setCardStacks(data))
        
    }, [])
    return(
    <>
    {cardStacks.map((stacks, i) => {
        return(
            <div key={i}>{stacks.title}</div>
        )
    })}
    
    </>
        
    )
}