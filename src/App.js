
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Courses from './Component/courses';
function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </Router>

  );
}

export default App;