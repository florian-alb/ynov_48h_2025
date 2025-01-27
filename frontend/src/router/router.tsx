import Home from "@/pages/public/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "@/pages/public/Login.tsx";
import Register from "@/pages/public/Register.tsx";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
};
