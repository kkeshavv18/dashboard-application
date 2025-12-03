import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
