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
import ShowCardStacks from './pages/showCardStack/showCardStacks';
import ShowCard from './pages/ShowCard/showCard';
import ErrorPage from './pages/errorPage/errorPage';
import AccountPage from './pages/account/account';

function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn}/>
      
      <Routes>
        <Route path='/' element={<ShowCardStacks setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/account' element={<AccountPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/:stackid" element={<ShowCard />}/>
        <Route path='/:anything' element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
