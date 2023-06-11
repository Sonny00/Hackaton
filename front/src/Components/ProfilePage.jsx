import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import useApi from "../Hooks/useApi";
import DropDownFilter from "../Components/DropDownFilter";
import SearchBar from "./SearchBar";
import {
    AppBar,
    Dialog,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Card,
    CardActions,
} from "@mui/material";
import { createUseStyles } from "react-jss";
import UserForm from "./UserForm";

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [openAddUser, setOpenAddUser] = useState(false);
    const [openEditUser, setOpenEditUser] = useState(false);
    const [selectedUserToEdit, setSelectedUserToEdit] = useState(null);

    const api = useApi();
    const classes = useStyles();

    const fetchData = async (selectedFilter, searchInput) => {
        try {
            const users = await api.getUsers(selectedFilter, searchInput);
            setUserData(users?.data);
        } catch (error) {
            alert("Une erreur est survenue");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function addUser(user) {
        try {
            const { data: createdEvent } = await api.addUser(user);
            setUserData((prev) => [...prev, createdEvent]);
            setOpenAddUser(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function updateUser(id, data) {
        const updateData = {
            firstname: data?.firstname,
            lastname: data?.lastname,
            email: data?.email,
            jobTitle: data?.jobTitle,
        };

        try {
            const { data: updatedUser } = await api.updateUser(id, updateData);
            setOpenEditUser(false);
            fetchData(selectedFilter, searchInput);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteUser(user) {
        try {
            await api.deleteUser(user.id);
            setUserData((prev) => {
                const users = prev.filter((e) => e.id !== user.id);
                return users;
            });
        } catch (error) {
            console.error(error);
        }
    }

    const ProfilePage = ({ userData }) => {
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
                            <Card sx={{ marginTop: "30px" }}>
                                <CardActions sx={{ marginBottom: "15px" }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            setOpenEditUser(true);
                                            setSelectedUserToEdit(userData);
                                        }}
                                    >
                                        Modifier
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteUser(userData)}
                                    >
                                        Supprimer
                                    </Button>
                                </CardActions>
                            </Card>
                            <Dialog
                                open={openEditUser}
                                fullScreen
                                onClose={() => {
                                    setOpenEditUser(false);
                                }}
                            >
                                <AppBar sx={{ position: "relative" }}>
                                    <Toolbar>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={() => {
                                                setOpenEditUser(false);
                                            }}
                                            aria-label="close"
                                        >
                                            <i className="bi bi-x"></i>
                                        </IconButton>
                                        <Typography
                                            sx={{ ml: 2, flex: 1 }}
                                            variant="h6"
                                            component="div"
                                        >
                                            Modifier un évènement
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <div className={classes.dialogContent}>
                                    <UserForm
                                        user={selectedUserToEdit}
                                        onSubmit={(user) => {
                                            updateUser(
                                                selectedUserToEdit.id,
                                                user,
                                            );
                                        }}
                                        isUpdate={true}
                                    />
                                </div>
                            </Dialog>
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
                <hr className="solid"></hr>
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
                <Button
                    className={classes.btnAdd}
                    variant="contained"
                    onClick={() => {
                        setOpenAddUser(true);
                    }}
                >
                    Ajouter
                </Button>
            </div>
            <hr className="solid"></hr>
            {userData && (
                <div>
                    {userData?.map((user) => {
                        return (
                            <div key={user.id}>
                                <ProfilePage userData={user} />
                            </div>
                        );
                    })}
                </div>
            )}
            <Dialog
                open={openAddUser}
                fullScreen
                onClose={() => {
                    setOpenAddUser(false);
                }}
            >
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => {
                                setOpenAddUser(false);
                            }}
                            aria-label="close"
                        >
                            <i className="bi bi-x"></i>
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Ajouter un employé
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.dialogContent}>
                    <UserForm onSubmit={addUser} />
                </div>
            </Dialog>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    header: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "20px",
        paddingBottom: "20px",
        borderBottom: "0.5px solid black",
    },
    events: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        marginTop: "20px",
        rowGap: "20px",
    },
    btnAdd: {
        width: "100px",
    },
    dialogContent: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "20px",
        paddingInline: "5%",
    },
});
