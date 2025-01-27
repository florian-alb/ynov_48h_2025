import Home from "@/pages/public/Home";
import { Login } from "@/pages/public/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
