import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage';
import About from './components/About/About';
import NavBar from './components/homePage/navBar/NavBar';
import Content from './components/Contect/Content';
import Help from './components/Help/Help';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
    const [navOpen, setNavOpen] = useState(true);
    return (
        <div className="App">
        <BrowserRouter>
        {navOpen &&<NavBar/>}
            <Routes>
                <Route path='/Login' element={<Login setNavOpen={setNavOpen}/>} />
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/content' element={<Content/>} />
                <Route path='/help' element={<Help/>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;

