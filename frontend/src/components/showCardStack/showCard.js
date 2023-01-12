import { useEffect, useState } from "react"
import { getUserCardStacks } from "../../utils/api"
import { Link } from "react-router-dom"

export default function ShowCardStack() {
    const [cardStacks, setCardStacks] = useState([])

    useEffect(() => {
        getUserCardStacks().then(data => setCardStacks(data))
        
    }, [])
    return(
    <>
    {cardStacks.map((stacks, i) => {
        return(
            <>
            
            <div key={i}><Link to={"/" + stacks._id}>{stacks.title}</Link></div>
            </>
        )
    })}
    
    </>
        
    )
}