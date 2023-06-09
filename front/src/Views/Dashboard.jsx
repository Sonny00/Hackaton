import { Navigate } from "react-router-dom";
import { AdminRoutes } from "../Constants";
import { useUser } from "../Contexts/UserProvider";
import { isAdmin, isUser } from "../Utils/auth";
import UserDashboard from "./User";

export default function Dashboard() {
    const { user } = useUser();

    if (isAdmin(user)) {
        return <Navigate to={`/me/${AdminRoutes.STATS}`} />;
    }

    if (isUser(user)) {
        return <UserDashboard />;
    }

    return <Navigate to="/" />;
}
