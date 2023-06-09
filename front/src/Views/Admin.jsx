import { Navigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { RequireAdmin } from "../Components/RequireRole";
import { AdminRoutes } from "../Constants";
import { createUseStyles } from "react-jss";
import Events from "../Components/Events";
import ProfilePage from "../Components/ProfilePage";

export default function AdminDashboard() {
    const { tabId } = useParams();
    const classes = useStayles();

    return (
        <RequireAdmin>
            <div className={classes.container}>
                <NavBar />
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
        return <ProfilePage />;
    }

    if (name === AdminRoutes.EVENTS) {
        return <Events />;
    }

    return <Navigate to={`/me/${AdminRoutes.STATS}`} />;
}

const useStayles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    tab: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        paddingInline: "15px",
    },
});
