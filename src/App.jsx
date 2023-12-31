import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Features, Pricing, Stories } from "./views";
import { Footer, Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
