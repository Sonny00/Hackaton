import { createContext, useContext, useState } from "react";
import UserStorage from "../Services/UserStorage";

const context = createContext({
    user: null,
    login: () => {
        // no operation
    },
    logout: () => {
        // no operation
    },
});

const useUser = () => useContext(context);

function UserProvider({ children }) {
    const [user, setUser] = useState(() => UserStorage.load());

    function login() {
        setUser({});
    }

    function logout() {
        UserStorage.clear();
    }

    return (
        <context.Provider value={{ user, login, logout }}>
            {children}
        </context.Provider>
    );
}

export { UserProvider, useUser };
