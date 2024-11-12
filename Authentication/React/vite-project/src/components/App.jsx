import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Login />} /> {/* Default route points to Login */}
                <Route path="/signup" element={<Signup />} /> {/* Route to Signup */}
                {/* Add more routes here if needed */}
            </Routes>
    );
}

export default App;
