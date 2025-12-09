import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-invoice" element={<h1>Create Invoice Page</h1>} />
        <Route path="/view-invoices" element={<h1>View Invoice Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
