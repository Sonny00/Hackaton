import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { AdminRoutes } from "../Constants";
import { useUser } from "../Contexts/UserProvider";
import logo from "../assets/logoLight.svg";

export default function NavBar() {
    const { logout } = useUser();
    const classes = useStyles();

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    return (
        <div className="wrapper d-flex">
            <div className={classes.sidebar}>
                <img src={logo} alt="logo" style={{ width: "100%" }} />
                <div>
                    <NavLink
                        className={classes.link}
                        to={`/me/${AdminRoutes.STATS}`}
                    >
                        <i className="bi bi-bar-chart"></i>
                        Tableau de bord
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to={`/me/${AdminRoutes.EMPLOYEES}`}
                    >
                        <i className="bi bi-people"></i>
                        Les employés
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to={`/me/${AdminRoutes.EVENTS}`}
                    >
                        <i className="bi bi-calendar4-event"></i>
                        Les évenements
                    </NavLink>
                    <div
                        className={`${classes.link} ${classes.logout}`}
                        onClick={handleLogout}
                    >
                        <i className="bi bi-box-arrow-left"></i>
                        Déconnexion
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
    sidebar: {
        position: "fixed",
        width: "250px",
        height: "100%",
        background: "#282B2A",
        padding: "10px 0",
    },
    link: {
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
        alignItems: "center",
        color: "var(--color-white)",
        fontSize: "18px",
        textDecoration: "none",
        padding: "15px",
        borderBottom: "0.5px solid var(--color-white)",
    },
    logout: {
        cursor: "pointer",
    },
});
