import { Navigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { RequireAdmin } from "../Components/RequireRole";
import { AdminRoutes } from "../Constants";
import { createUseStyles } from "react-jss";

export default function AdminDashboard() {
    const { tabId } = useParams();
    const classes = useStayles();

    return (
        <RequireAdmin>
            <div className={classes.container}>
                <div className={classes.navbar}>
                    <NavBar />
                </div>
                <div className={classes.tab}>
                    <Tab name={tabId} />
                </div>
            </div>
        </RequireAdmin>
    );
}

function Tab({ name }) {
    if (name === AdminRoutes.STATS) {
        return <div>page des statistiques</div>;
    }

    if (name === AdminRoutes.EMPLOYEES) {
        return <div>page des employés</div>;
    }

    if (name === AdminRoutes.EVENTS) {
        return <div>page des évenements</div>;
    }

    return <Navigate to={`/me/${AdminRoutes.STATS}`} />;
}

const useStayles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    navbar: {
        flex: 2,
    },
    tab: {
        flex: 6,
    },
});
