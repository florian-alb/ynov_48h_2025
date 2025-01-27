import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from '../components/page/Home';
import {Login} from '../components/page/Login';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
};
