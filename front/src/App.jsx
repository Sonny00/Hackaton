import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import { createUseStyles } from "react-jss";
import { UserProvider } from "./Contexts/UserProvider";
import Dashboard from "./Views/Dashboard";

function App() {
    useColors();
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<div>page d'acceuil</div>} />
                    <Route path="/me" element={<Dashboard />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

const useColors = createUseStyles({
    "@global": {
        ":root": {
            "--color-black": "#282B2A",
            "--color-white": "#FDFDFD",
            "--color-red": "#E53F49",
            "--color-green": "#00BB7E",
            "--color-blue": "#5B98D2",
        },
    },
});

export default App;
