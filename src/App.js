import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Page/Footer";
import NavBar from "./components/Page/NavBar";
import Ankle from "./components/Evals/Ankle";
import Knee from "./components/Evals/Knee";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ankle" element={<Ankle />}></Route>
            <Route path="/knee" element={<Knee />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
