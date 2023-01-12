import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'

// API Functions
import { getUserCardStacks } from './utils/api';

// CSS
import './App.css';

// Components
import Nav from './components/nav/nav';

// Pages
import Login from './pages/login/login'
import ShowCardStacks from './pages/showCardStack/showCardStacks';
import ShowCard from './pages/ShowCard/showCard';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn}/>
      
      <Routes>
        <Route path='/' element={<ShowCardStacks />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/:stackid" element={<ShowCard />}/>
      </Routes>
      
    </div>
  );
}

export default App;
