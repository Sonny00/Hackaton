import { RequireUser } from "../Components/RequireRole";

export default function UserDashboard() {
    return (
        <RequireUser>
            <div>tableau de bord DEV</div>
        </RequireUser>
    );
}
