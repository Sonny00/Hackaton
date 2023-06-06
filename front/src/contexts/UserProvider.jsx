import { createContext, useContext, useState } from "react";

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
    const [user, setUser] = useState(null);

    function login() {
        setUser({});
    }

    function logout() {
        setUser(null);
    }

    return (
        <context.Provider value={{ user, login, logout }}>
            {children}
        </context.Provider>
    );
}

export { UserProvider, useUser };
