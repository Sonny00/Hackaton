import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { AdminRoutes } from "../Constants";
import logo from "../assets/logoLight.svg";
import { useUser } from "../Contexts/UserProvider";
import { navigate } from "react-router-dom";

export default function NavBar() {
    const classes = useStyles();

    const { logout } = useUser();
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
                        Tableau de bord
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to={`/me/${AdminRoutes.EMPLOYEES}`}
                    >
                        Les employés
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to={`/me/${AdminRoutes.EVENTS}`}
                    >
                        <a
                            href="#"
                            style={{
                                color: "#FDFDFD",
                                display: "block",
                                textDecoration: "none",
                            }}
                        >
                            <i
                                className="fas fa-users"
                                style={{ width: "25px!important" }}
                            ></i>
                            Les compétences
                        </a>
                    </li>
                   <li style={{ padding: "15px" }}>
            <a
                href="#"
                style={{ color: "#FDFDFD", display: "block", textDecoration: "none" }}
                onClick={handleLogout} 
            >
                <i className="fas fa-sign-out-alt" style={{ width: "25px!important" }}></i>
                Déconnexion
            </a>
        </li>
                </ul>
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
        display: "block",
        color: "var(--color-white)",
        textDecoration: "none",
        padding: "15px",
        borderBottom: "0.5px solid var(--color-white)",
    },
});
