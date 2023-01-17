import axios from 'axios'

const config = {
    headers: {
        'Authorization': localStorage.getItem('token')
        
    }
}

// USERS

// Sign up Route
export async function signUp(formData) {
    const {data} = await axios.post('http://localhost:8000/users/signup', formData)
    return data
}

// Login Route
export async function login(formData) {
    const { data } = await axios.post('http://localhost:8000/users/login', formData)
    return data
}

// CARDSTACKS

// Get User's Card Stacks
export async function getUserCardStacks() {
    const { data } = await axios.get('http://localhost:8000/stack/', config)
    return data
}

// Get all cards in one Stack
export async function getCardsinStack(stackid) {
    const { data } = await axios.get('http://localhost:8000/stack/' + stackid, config)
    return data
}

// Create CardStack
export async function createCardStack(formData) {
    const { data } = await axios.post('http://localhost:8000/stack/', formData, config)
    return data
}

