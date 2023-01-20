import {useEffect, useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// API Functions
import { getUserCardStacks } from './utils/api';

// CSS
import './App.css';

// Components
import Nav from './components/nav/nav';

// Pages
import Login from './pages/login/login'
import SignUp from './pages/signUp/signUp';
import ShowCardStacks from './pages/showCardStacks/showCardStacks';
import ShowCard from './pages/ShowCard/showCard';
import ErrorPage from './pages/errorPage/errorPage';
import AccountPage from './pages/account/account';
import AddCardStack from './pages/addCardStack/addCardStack';
import AddOneCard from './pages/addOneCard/addOneCard';




function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cardStacks, setCardStacks] = useState([])
  

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
    }
  }, [])
  
  useEffect(() => {
    
    if (isLoggedIn){
        
    getUserCardStacks().then((data) => {
        if (data.length > 0){
        setCardStacks(data)
        
        }
        
    })}
}, [isLoggedIn])

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCardStacks={setCardStacks} />
      
      <Routes>
        <Route path='/' element={<ShowCardStacks cardStacks={cardStacks} isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/account' element={<AccountPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/study/:stackid" element={<ShowCard />}/>
        <Route path='/new' element={<AddCardStack />} />
        <Route path='/:stackid' element={<AddOneCard />} />
        <Route path='/:anything' element={<ErrorPage />} />
        
        {/* <Route path='/:anything/:more' element={<ErrorPage />} /> */}
      </Routes>
     
    </div>
  );
}

export default App;
