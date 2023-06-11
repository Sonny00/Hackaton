import { RequireUser } from "../Components/RequireRole";
import React from "react";
import { useState } from "react";
import useApi from "../Hooks/useApi";
import { useUser } from "../Contexts/UserProvider";
import logo from "../assets/logoLight.svg";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBProgress,
    MDBProgressBar,
    MDBListGroup,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdb-react-ui-kit";

export default function UserDashboard() {
    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => setShowNavbar(!showNavbar);
    const { user, logout } = useUser();
    const [users, setUsers] = useState([]);

    const [basicModal, setBasicModal] = useState(false);
    const api = useApi();
    const [name, setname] = useState("");
    const [level, setLevel] = useState("");
    const [type, setType] = useState("");
    const toggleShow = () => setBasicModal(!basicModal);
    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    const loggedUser = user.id;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.getUser(loggedUser);
                const { data } = response;
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [api]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("level:", parseInt(level), typeof parseInt(level));
            console.log("type:", type, typeof type);
            console.log("name:", name, typeof name);

            await api.createSkill(name, "", level, user.id, type);
            setname("");
            setLevel("");
            setType("");
            toggleShow();
        } catch (error) {
            console.error("Error creating skill:", error);
        }
    };

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <style>
                {`
                    .sticky-top {
                        position: sticky;
                        top: 0;
                        z-index: 100;
                    }
                    .navbar-sticky-show .navbar-collapse {
                        display: block;
                    }
                    .navbar-sticky-hide .navbar-collapse {
                        display: none;
                    }
                    .custom-progress-bar {
                    background-color: black;
                    }
                    .bg-custom {
    background-color: rgba(33, 37, 41, 1); 
    }

    .logout-btn {
        color: white;
    }

    



                

                    `}
            </style>
            <MDBNavbar
                expand="lg"
                dark
                className={`sticky-top ${
                    showNavbar ? "navbar-sticky-show" : "navbar-sticky-hide"
                } bg-custom`}
            >
                <MDBContainer fluid>
                    <img
                        src={logo}
                        alt="logo"
                        width="220"
                        height="60"
                        className="fs-2"
                    />

                    <MDBNavbarToggler
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <i className="fas fa-bars" />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavbar}>
                        <MDBNavbarNav className="ms-auto">
                            <MDBNavbarItem
                                className="ms-auto"
                                onClick={handleLogout}
                            > 
                                <MDBNavbarBrand href="#" classID="logout-btn">
                                    Déconnexion
                                </MDBNavbarBrand>
                            </MDBNavbarItem>
                        
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "150px" }}
                                    fluid
                                />
                                <div class="d-flex justify-content-center">
                                    <div class="btn btn-dark btn-rounded">
                                        <label
                                            class="form-label text-white m-1"
                                            for="customFile2"
                                        >
                                            Votre image de profil
                                        </label>
                                        <input
                                            type="file"
                                            class="form-control d-none text-dark"
                                            id="customFile2"
                                        />
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <div style={{ minWidth: "21rem" }}>
                                        <h6 className="bg-light p-2 border-top border-bottom  text-center text-primary font-italic me-1 text-black">
                                            Evenements
                                        </h6>
                                    </div>
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            Conférence Java
                                        </p>
                                        <p className="text-muted mb-0">
                                            12/08/2023
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            Conférence Web3
                                        </p>
                                        <p className="text-muted mb-0">
                                            20/09/2023
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            Figma workshop
                                        </p>
                                        <p className="text-muted mb-0">
                                            03/10/2023
                                        </p>
                                    </div>
                                    <br />
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1 text-black">
                                                Nom
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {users.lastname}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1 text-black">
                                                Prénom
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {users.firstname}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1 text-black">
                                                Email
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {users.email}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1 text-black">
                                                Poste
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {users.jobTitle}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1 text-black">
                                                Equipe
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {users.teamId}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBRow>
                            <MDBCol md="8">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <div style={{ minWidth: "21rem" }}>
                                            <h6 class="bg-light p-2 border-top border-bottom text-center text-primary font-italic me-1 text-black">
                                                Compétences
                                            </h6>
                                        </div>
                                        <MDBCardText
                                            className="mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            Web Design
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width="50"
                                                valuemin={0}
                                                valuemax={100}
                                                className="custom-progress-bar"
                                            />
                                        </MDBProgress>
                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            HTML
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width="20"
                                                valuemin={0}
                                                valuemax={100}
                                                className="custom-progress-bar"
                                            />
                                        </MDBProgress>
                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            CSS
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width="40"
                                                valuemin={0}
                                                valuemax={100}
                                                className="custom-progress-bar"
                                            />
                                        </MDBProgress>
                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            JAVA
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width="50"
                                                valuemin={0}
                                                valuemax={100}
                                                className="custom-progress-bar"
                                            />
                                        </MDBProgress>
                                        <MDBCardText
                                            className="mt-4 mb-1"
                                            style={{ fontSize: ".77rem" }}
                                        >
                                            PHP
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar
                                                width="50"
                                                valuemin={0}
                                                valuemax={100}
                                                className="custom-progress-bar"
                                            />
                                        </MDBProgress>
                                    </MDBCardBody>
                                    <MDBCardBody className="d-flex justify-content-center">
                                        <label
                                            class="ripple ripple-surface ripple-surface-light btn btn-dark"
                                            for="Ajouter"
                                        >
                                            Ajouter
                                        </label>

                                        <input
                                            type="button"
                                            onClick={toggleShow}
                                            class="form-control d-none text-dark"
                                            id="Ajouter"
                                        />
                                        <MDBModal
                                            show={basicModal}
                                            setShow={setBasicModal}
                                            tabIndex="-1"
                                        >
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>
                                                            Ajouter une
                                                            compétence
                                                        </MDBModalTitle>
                                                        <MDBBtn
                                                            className="btn-close"
                                                            color="black"
                                                            onClick={toggleShow}
                                                        ></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <form
                                                            onSubmit={(e) =>
                                                                handleFormSubmit(
                                                                    e,
                                                                )
                                                            }
                                                        >
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="form-label"
                                                                >
                                                                    Compétence
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    value={name}
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setname(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="level"
                                                                    className="form-label"
                                                                >
                                                                    Niveau de
                                                                    compétence
                                                                    (en
                                                                    pourcentage
                                                                    %)
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="level"
                                                                    value={
                                                                        level
                                                                    }
                                                                    min="0"
                                                                    max="100"
                                                                    step="10"
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setLevel(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <select
                                                                    class="form-select"
                                                                    aria-label="Default select example"
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setType(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                >
                                                                    <option
                                                                        selected
                                                                    >
                                                                        Type de
                                                                        compétence
                                                                    </option>
                                                                    <option value="INFRA">
                                                                        INFRA
                                                                    </option>
                                                                    <option value="FRONT">
                                                                        FRONT
                                                                    </option>
                                                                    <option value="BACK">
                                                                        BACK
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <input
                                                                type="submit"
                                                                className="ripple ripple-surface ripple-surface-light btn btn-dark"
                                                                value="Ajouter"
                                                            />
                                                        </form>
                                                    </MDBModalBody>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className="mb-4"></MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
