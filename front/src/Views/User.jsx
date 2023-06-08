import { useEffect, useState } from "react";
import { RequireUser } from "../Components/RequireRole";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Components/NavBar";

export default function UserDashboard() {
    const [userData, setUserData] = useState(null);

    const fetchData = () => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const ProfilePage = (user) => {
        const { userData } = user;
        return (
            <div className="container mt-5 mb-5 w-65">
                <div className="row">
                    <div
                        className="col-sm-4 col-lg-4"
                        style={{
                            display: "flex",
                            width: "300px",
                            height: "300px",
                        }}
                    >
                        <img src={userData?.profilePicture} alt="Profile" />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-dark text-white">
                                <h3 className="display-5">
                                    {userData?.firstname} {userData?.lastname}
                                </h3>
                            </div>
                            <div className="p-3 bg-black text-white">
                                <h6>
                                    {userData?.team?.teamName} {" - "}
                                    {userData?.jobTitle}
                                </h6>
                            </div>
                            <div className="d-flex flex-row text-white">
                                <div className="p-4 bg-primary text-center">
                                    <h4>90%</h4>
                                    <h6>Bootstrap</h6>
                                </div>
                                <div className="p-3 bg-success text-center">
                                    <h4>70%</h4>
                                    <h6>Jquery</h6>
                                </div>
                                <div className="p-3 bg-warning text-center">
                                    <h4>80%</h4>
                                    <h6>HTML</h6>
                                </div>
                                <div className="p-3 bg-danger text-center">
                                    <h4>75%</h4>
                                    <h6>PHP</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="solid"></hr>
            </div>
        );
    };

    return (
        <RequireUser>
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <NavBar />
                </div>
                <div
                    style={{
                        flex: 5,
                    }}
                >
                    {userData &&
                        userData?.map((user, index) => {
                            return (
                                <div key={index}>
                                    <ProfilePage userData={user} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </RequireUser>
    );
}
