import { useEffect, useState } from "react";
import { RequireAdmin } from "../Components/RequireRole";
import NavBar from "../Components/NavBar";
import useApi from "../Hooks/useApi";
import SearchBar from "../Components/SearchBar";

export default function AdminDashboard() {
    const [userData, setUserData] = useState(null);

    const api = useApi();

    const fetchData = async () => {
        try {
            const users = await api.getUsers();
            setUserData(users?.data);
        } catch (error) {
            console.log(error);
        }
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
                        <img
                            src={
                                userData?.profilePicture ??
                                "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                            }
                            alt="Profile"
                        />
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
        <RequireAdmin>
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        flex: 2,
                    }}
                >
                    <NavBar />
                </div>
                <div
                    style={{
                        flex: 6,
                    }}
                >
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "30px",
                            fontWeight: "bold",
                            marginTop: "20px",
                            marginBottom: "20px",
                            paddingBottom: "20px",
                            borderBottom: "0.5px solid black",
                        }}
                    >
                        Les employés
                    </div>
                    <SearchBar />
                    {userData && (
                        <div>
                            {userData?.map((user, index) => {
                                return (
                                    <div key={index}>
                                        <ProfilePage userData={user} />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </RequireAdmin>
    );
}
