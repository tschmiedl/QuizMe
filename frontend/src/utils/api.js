import axios from 'axios'



// USERS

// Sign up Route
export async function signUp(formData) {
    const {data} = await axios.post('users/signup', formData)
    return data
}

// Login Route
export async function login(formData) {
    const { data } = await axios.post('users/login', formData)
    return data
}

// CARDSTACKS

// Get User's Card Stacks
export async function getUserCardStacks() {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    
    const { data } = await axios.get('stack/', config)
    return data
}

// Get all cards in one Stack
export async function getCardsinStack(stackid) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    
    const { data } = await axios.get('/stack/' + stackid, config)
    return data
}

// Create CardStack
export async function createCardStack(formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    const { data } = await axios.post('/stack/', formData, config)
    return data
}

// Add a card
export async function addOneCard(stackId, formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    const { data } = await axios.put('stack/' + stackId, formData, config)
    return data
}

// Delete a card
export async function deleteOneCard(stackId, cardId) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    const { data } = await axios.delete('/stack/' + stackId + '/' + cardId, config)
    return data
}

// Edit a card
export async function updateOneCard(stackId, cardId, formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
            
        }
    }
    const { data } = await axios.put('/stack/' + stackId + '/' + cardId, formData, config)
    return data
}