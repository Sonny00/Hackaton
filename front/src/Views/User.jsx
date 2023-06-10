import { RequireUser } from "../Components/RequireRole";
import React from "react";
import { useState } from "react";
import { useUser } from "../Contexts/UserProvider"; 
import "bootstrap/dist/css/bootstrap.css";
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

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
     const handleLogout = () => {
        logout();
        window.location.reload();
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
                `}
            </style>
           <MDBNavbar
                expand='lg'
                light
                bgColor='light'
                className={showNavbar ? 'sticky-top navbar-sticky-show' : 'sticky-top navbar-sticky-hide'}
            >
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Carbon</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={toggleNavbar}
                    >
                        <i className='fas fa-bars' />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavbar}>
                        <MDBNavbarNav className='ms-auto'>
                            <MDBNavbarItem className="ms-auto" onClick={handleLogout}>
                                                   <MDBNavbarBrand href='#'>Déconnexion</MDBNavbarBrand>

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
                                    <div class="btn btn-primary btn-rounded">
                                        <label
                                            class="form-label text-white m-1"
                                            for="customFile2"
                                        >
                                            Choose file
                                        </label>
                                        <input
                                            type="file"
                                            class="form-control d-none"
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
                                        <h6 className="bg-light p-2 border-top border-bottom  text-center text-primary font-italic me-1">
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
                                            <span className="text-primary font-italic me-1">
                                                Nom
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            Johnatan
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1">
                                                Prénom
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {" "}
                                            Smith
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1">
                                                Email
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            John@example.fr
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1">
                                                Poste
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            développeur web front end
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>
                                            <span className="text-primary font-italic me-1">
                                                Equipe
                                            </span>
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            1
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
                                            <h6 className="bg-light p-2 border-top border-bottom text-center text-primary font-italic me-1">
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
                                            />
                                        </MDBProgress>
                                    </MDBCardBody>
                                    <MDBCardBody className="d-flex justify-content-center">
                                        <label
                                            class="ripple ripple-surface ripple-surface-light btn btn-primary"
                                            for="Ajouter"
                                        >
                                            Ajouter
                                        </label>

                                        <input
                                            type="button"
                                            onClick={toggleShow}
                                            class="form-control d-none"
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
                                                            Ajouter une compétence
                                                        </MDBModalTitle>
                                                        <MDBBtn
                                                            className="btn-close"
                                                            color="none"
                                                            onClick={toggleShow}
                                                        ></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        {" "}
                                                        <form>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="competence"
                                                                    className="form-label"
                                                                >
                                                                    Compétence
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="competence"
                                                                    // value={competence}
                                                                    // onChange={handleCompetenceChange}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="niveau"
                                                                    className="form-label"
                                                                >
                                                                    Niveau de
                                                                    compétence
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="niveau"
                                                                    // value={niveau}
                                                                    // onChange={handleNiveauChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </form>
                                                    </MDBModalBody>

                                                    <MDBModalFooter>
                                                        <input
                                                            type="submit"
                                                            onClick={toggleShow}
                                                            class="ripple ripple-surface ripple-surface-light btn btn-primary"
                                                            value="Ajouter"
                                                            id="Sauvegarder"
                                                        />
                                                    </MDBModalFooter>
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
