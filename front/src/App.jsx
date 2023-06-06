import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>page d'acceuil</div>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
