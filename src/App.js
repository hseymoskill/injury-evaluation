import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Ankle from './components/Evals/Ankle'

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ankle" element={<Ankle/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
