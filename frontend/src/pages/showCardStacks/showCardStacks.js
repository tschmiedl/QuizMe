import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserCardStacks } from "../../utils/api"
import { motion } from "framer-motion"

export default function ShowCardStacks(props) {
    const [cardStacks, setCardStacks] = useState([])

    useEffect(() => {
        if (props.isLoggedIn){
        getUserCardStacks().then(data => setCardStacks(data))}
    }, [])

   
    
return(
    <>
    <div>
    {props.isLoggedIn? 
    <div className="row">
    <h2>Your Card Stacks:</h2> 
    {cardStacks.map((stacks, i) => {
        return(
                      
            <motion.div 
            key={i} 
            className="col s6 m6 l3"
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>
            <Link to={"/study/" + stacks._id}>
            <div className="card mx-auto">
                <h1 className="card-title">{stacks.title}</h1>   
            </div>    
            </Link>
            </motion.div>
        )
    })}
    </div>
    :
    <div>
        <h1>Sign Up or Login to continue!</h1>
    </div>}
    </div>
    </>
)}