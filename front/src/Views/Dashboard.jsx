import { Navigate } from "react-router-dom";
import { useUser } from "../Contexts/UserProvider";
import AdminDashboard from "./Admin";
import UserDashboard from "./User";
import { isAdmin, isUser } from "../Utils/auth";

export default function Dashboard() {
    const { user } = useUser();

    if (isAdmin(user)) {
        return <AdminDashboard />;
    }

    if (isUser(user)) {
        return <UserDashboard />;
    }

    return <Navigate to="/" />;
}
