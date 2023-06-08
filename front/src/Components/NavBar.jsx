import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
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
                <ul style={{ padding: "0" }}>
                    <li style={{ padding: "15px" }}>
                        <a
                            href="#"
                            style={{ color: "#FDFDFD", display: "block" }}
                        >
                            <i
                                className="fas fa-home"
                                style={{ width: "25px!important" }}
                            ></i>
                            Dashboard
                        </a>
                    </li>
                    <li style={{ padding: "15px" }}>
                        <a
                            href="#"
                            style={{ color: "#FDFDFD", display: "block" }}
                        >
                            <i
                                className="fas fa-users"
                                style={{ width: "25px!important" }}
                            ></i>
                            Team
                        </a>
                    </li>
                    <li style={{ padding: "15px" }}>
                        <a
                            href="#"
                            style={{ color: "#FDFDFD", display: "block" }}
                        >
                            <i
                                className="fas fa-users"
                                style={{ width: "25px!important" }}
                            ></i>
                            Skills
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
