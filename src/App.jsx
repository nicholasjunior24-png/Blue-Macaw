
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Price from "./pages/Prices";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Prices" element={<Price />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
