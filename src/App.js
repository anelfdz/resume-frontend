import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;
