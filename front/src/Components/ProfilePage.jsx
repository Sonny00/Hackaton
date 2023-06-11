import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import useApi from "../Hooks/useApi";
import DropDownFilter from "../Components/DropDownFilter";
import SearchBar from "./SearchBar";

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const api = useApi();

    const fetchData = async (selectedFilter, searchInput) => {
        try {
            const users = await api.getUsers(selectedFilter, searchInput);
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

        const getRandomColor = () => {
            const options = [
                "#E53F49",
                "#00BB7E",
                "#5B98D2",
                "#F2C94C",
                "#F2994A",
                "#BB6BD9",
                "#BB6BD9",
            ];
            return options[Math.floor(Math.random() * options.length)];
        };

        return (
            <div className="container mt-5 mb-5 w-65">
                <div className="row">
                    <div
                        className="col-sm-4 col-lg-4"
                        style={{
                            display: "flex",
                            width: "250px",
                            height: "250px",
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
                            <div
                                style={{
                                    height: "70px",
                                    marginTop: "35px",
                                }}
                                className="d-flex flex-row justify-content-between align-items-center p-3 bg-dark text-white"
                            >
                                <h3 className="display-10">
                                    {userData?.firstname} {userData?.lastname}
                                </h3>
                            </div>
                            <div
                                style={{
                                    height: "70px",
                                }}
                                className="p-3 bg-black text-white"
                            >
                                <h6>
                                    {userData?.team?.teamName} {" - "}
                                    {userData?.jobTitle}
                                </h6>
                            </div>
                            <div className="d-flex flex-row text-white">
                                {userData?.skills &&
                                    userData?.skills?.map((skill) => {
                                        return (
                                            <div
                                                className="p-3"
                                                key={skill.id}
                                                style={{
                                                    marginTop: "10px",
                                                    marginRight: "10px",
                                                    heigh: "30px",
                                                    color: "white",
                                                    borderRadius: "10px",
                                                    backgroundColor:
                                                        getRandomColor(),
                                                }}
                                            >
                                                <h6>{skill.name}</h6>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="solid"></hr>
            </div>
        );
    };

    return (
        <div>
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
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "10px",
                }}
            >
                <div>
                    <DropDownFilter
                        onValidate={() => {
                            let value = selectedFilter;

                            if (selectedFilter === "All") {
                                value = "";
                            }
                            fetchData(value, searchInput);
                        }}
                        selectedFilter={setSelectedFilter}
                    />
                </div>
                <div>
                    <SearchBar
                        onValidate={(value) => {
                            setSelectedFilter("");
                            fetchData(selectedFilter, value);
                        }}
                        userInput={setSearchInput}
                    />
                </div>
            </div>
            <hr class="solid"></hr>
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
    );
}
