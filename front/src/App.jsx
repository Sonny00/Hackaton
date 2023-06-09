import { createUseStyles } from "react-jss";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import { UserProvider } from "./Contexts/UserProvider";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";

import "bootstrap/dist/css/bootstrap.css";

function App() {
    useColors();

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
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
        body: {
            margin: 0,
            width: "100%",
            height: "100%",
        },
        "#root": {
            width: "100%",
            height: "100%",
        },
    },
});

export default App;
