import React from "react";
import logo from "../assets/logoLight.svg";
import { useUser } from "../Contexts/UserProvider";
import { navigate } from "react-router-dom";

export default function NavBar() {
    const { logout } = useUser();
      const handleLogout = () => {
        logout();
        window.location.reload();
    };



    return (
        <div className="wrapper d-flex">
            <div
                className="sidebar"
                style={{
                    position: "fixed",
                    width: "250px",
                    height: "100%",
                    background: "#282B2A",
                    padding: "10px 0",
                }}
            >
                <img src={logo} alt="logo" style={{ width: "100%" }} />
                <ul style={{ padding: "0" }}>
                    <li
                        style={{
                            padding: "15px",
                            borderBottom: "0.5px solid #FDFDFD",
                        }}
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
                                className="fas fa-home"
                                style={{ width: "25px!important" }}
                            ></i>
                            Tableau de bord
                        </a>
                    </li>
                    <li
                        style={{
                            padding: "15px",
                            borderBottom: "0.5px solid #FDFDFD",
                        }}
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
                            Les employés
                        </a>
                    </li>
                    <li
                        style={{
                            padding: "15px",
                            borderBottom: "0.5px solid #FDFDFD",
                        }}
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
