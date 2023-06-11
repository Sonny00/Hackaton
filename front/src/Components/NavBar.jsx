import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { AdminRoutes } from "../Constants";
import { useUser } from "../Contexts/UserProvider";
import logo from "../assets/logoLight.svg";

export default function NavBar() {
    const { user, logout } = useUser();
    const classes = useStyles();

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    return (
        <div className="wrapper d-flex">
            <div className={`${classes.sidebar} d-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={logo} alt="logo" width="220" height="100" className="fs-4" />
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to={`/me/${AdminRoutes.STATS}`} className="nav-link text-white" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                            Tableau de bord
                        </NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink to={`/me/${AdminRoutes.EMPLOYEES}`} className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people"></use></svg>
                            Les employés
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/me/${AdminRoutes.EVENTS}`} className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#calendar-event"></use></svg>
                            Les événements
                        </NavLink>
                    </li>
                    <li className="nav-item">
                           <a className="nav-link text-white" onClick={handleLogout}>
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
              Déconnexion
            </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user && user.profilePicture} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{user && `${user.firstname} ${user.lastname}`}</strong>
                    </a>
                </div>
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
 
    
}); 
