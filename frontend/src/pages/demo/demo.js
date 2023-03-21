import { motion } from "framer-motion"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Demo ({cardStacks}) {

   


    return(
        <>
    <div>
    {cardStacks.length > 0 && 
    <div className="row">
        <h2 id="yourCardStacks">Welcome</h2>
    <h2 id="yourCardStacks">Your Card Stacks:</h2> 
    {cardStacks.map((stacks, i) => {
        return(
                      
            <motion.div 
            key={i} 
            className="col s6 m6 l3"
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>
            <Link to={"/study/" + stacks._id} className="link">
            <div className="card mx-auto">
                <h1 className="card-title">{stacks.title}</h1>   
            </div>    
            </Link>
            </motion.div>
        )
    })}
    </div>
    }
    {cardStacks.length === 0 &&
    <div>
        <h2 className="instructions">Create a New Stack to get started!</h2>
    </div>
    }
    
    </div>
    
   
    
    </>
    )
}