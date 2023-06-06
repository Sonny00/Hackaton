import { RequireAdmin } from "../Components/RequireRole";

export default function AdminDashboard() {
    return (
        <RequireAdmin>
            <div>tableau de bord RH</div>
        </RequireAdmin>
    );
}
