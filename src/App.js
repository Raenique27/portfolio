import React, {useState} from 'react';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <Router>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage}>

      </Header>
      <main>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/portfolio' element={<About/>}/>
          <Route path='/About' element={<About/>} />
        </Routes>      
      </main>
    </Router>
  );
}

export default App;
