import axios from 'axios'

const config = {
    headers: {
        // 'Authorization': localStorage.getItem('token')
        'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYzYmYwNmY1ZDYyNjk0YjlmODE4ZTdiMyJ9.yT3U0Sm1_ZwaRfTG1-w3lcweK98Iz_pfyMrRLBTWfxo"
    }
}

// USERS

// Sign up Route
export async function signUp(formData) {
    const {data} = await axios.post('http://localhost:8000/user/signup', formData)
    return data
}

// Login Route
export async function login(formData) {
    const { data } = await axios.post('http://localhost:8000/user/login', formData)
    return data
}

// CARDSTACKS

// Get User's Card Stacks
export async function getUserCardStacks() {
    const { data } = await axios.get('http://localhost:8000/stack/', config)
    return data
}


