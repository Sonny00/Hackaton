import { RequireUser } from "../Components/RequireRole";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
    MDBListGroupItem,
    MDBTextArea 
} from 'mdb-react-ui-kit';

export default function UserDashboard() {
export default function UserDashboard() {
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <div class="d-flex justify-content-center">
                                    <div class="btn btn-primary btn-rounded">
                                        <label class="form-label text-white m-1" for="customFile2">Choose file</label>
                                        <input type="file" class="form-control d-none" id="customFile2" />
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        
                                        <MDBCardText><span className="text-primary font-italic me-1 ">Evenements</span></MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBTextArea  id='textAreaExample' rows={4} />
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText><span className="text-primary font-italic me-1">Nom</span></MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Johnatan</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText><span className="text-primary font-italic me-1">Prénom</span></MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"> Smith</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText><span className="text-primary font-italic me-1">Email</span></MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">John@example.fr</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText><span className="text-primary font-italic me-1">Poste</span></MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">développeur web front end</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText><span className="text-primary font-italic me-1">Equipe</span></MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">1</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBRow>
                            <MDBCol md="8">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "> Compétences</span></MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar bgColor='success' striped animated width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>HTML</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar striped animated width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>CSS</MDBCardText>
                                        <MDBProgress className="rounded" >
                                            <MDBProgressBar bgColor='success' striped animated width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>JAVA</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar bgColor='danger' striped animated width={55} valuemin={0} valuemax={100} style={{ fontSize: '.77rem' }} />
                                        </MDBProgress>
                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>PHP</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar striped animated width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>

    );
}
