import Header from "./Components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
