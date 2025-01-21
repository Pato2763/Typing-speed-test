import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="test/:difficulty" element={<TestPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
