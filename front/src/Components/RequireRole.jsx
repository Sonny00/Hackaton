import { Navigate } from "react-router-dom";
import { useUser } from "../Contexts/UserProvider";
import { Role } from "../Constants";

function RequireRole(role, children) {
    const { user } = useUser();
    if (user == null || user.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
}

export function RequireUser({ children }) {
    return RequireRole(Role.USER, children);
}

export function RequireAdmin({ children }) {
    return RequireRole(Role.ADMIN, children);
}
