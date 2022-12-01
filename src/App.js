import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Ankle from './components/Evals/Ankle';
import Header from './components/Page/Header';
import Footer from './components/Page/Footer';

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ankle" element={<Ankle/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
