import { useEffect, useState } from "react"
import { getUserCardStacks } from "../../utils/api"
import { Link } from "react-router-dom"



export default function ShowCardStacks(props) {
    
    const [cardStacks, setCardStacks] = useState([])

   

    useEffect(() => {
        if (localStorage.token){
        getUserCardStacks().then(data => setCardStacks(data))}
    }, [])

    
    return(
    <>
    {props.isLoggedIn? 
    <div className="row">
    <h2>Your Card Stacks:</h2> 
    {cardStacks.map((stacks, i) => {
        return(
                      
            <div key={i} className="col s6 m6 l3">
            <Link to={"/study/" + stacks._id} className="btn">
            <div className="card mx-auto">
                <h1 className="card-title">{stacks.title}</h1>   
            </div>    
            </Link>
            </div>
            
           
        )
    })}
    </div>
    :
    <div>
        <h1>Sign Up or Login to continue!</h1>
    </div>}
    </>
        
    )
}