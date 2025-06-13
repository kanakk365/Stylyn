import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here as you create more pages */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
