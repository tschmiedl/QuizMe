import { useEffect, useState } from "react"
import { getUserCardStacks } from "../../utils/api"
import { Link } from "react-router-dom"

export default function ShowCardStacks() {
    const [cardStacks, setCardStacks] = useState([])

    useEffect(() => {
        getUserCardStacks().then(data => setCardStacks(data))
        
    }, [])

    
    return(
    <>
    <div className="row">
    <h2>Your Card Stacks:</h2> 
    {cardStacks.map((stacks, i) => {
        return(
                      
            <div key={i} className="col s6 m6 l3">
            <Link to={"/" + stacks._id} className="btn">
            <div className="card mx-auto">
                <h1 className="card-title">{stacks.title}</h1>   
            </div>    
            </Link>
            </div>
            
           
        )
    })}
    </div>
    </>
        
    )
}