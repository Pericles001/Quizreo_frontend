import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Signup() {
    const navigate = useNavigate();
    const location = useLocation();
    const toLog = () => {
        navigate('/');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Form className="mx-auto col-md-4 shadow"
                      style={{backgroundColor: "#D9D9D9", marginTop: "100px", marginBottom: "100px"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>Quizreo</h4>
                    <Form.Group controlId="formBasicFirstName" className="mt-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName" className="mt-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicSurName" className="mt-3">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>

                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg">
                        Signup
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/login">Login here</Link>
                </Form>
            </div>
        </div>
    )
}
