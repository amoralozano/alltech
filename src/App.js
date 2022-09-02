import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TopBan from "./components/TopBan";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBan />
        <NavBar />
        <div className="content bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
