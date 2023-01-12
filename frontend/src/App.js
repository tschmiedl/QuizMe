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
import ShowCardStack from './components/showCardStack/showCard';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn}/>
      <ShowCardStack />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
