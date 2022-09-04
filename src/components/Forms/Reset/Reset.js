import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Outlet, useLocation, useNavigate} from "react-router";

export function Reset() {
    const navigate = useNavigate();
    const location = useLocation();
    const toLog = (target) => {
        navigate(target);
    }

    return (
        <div className="container-fluid">

            <div className="row">
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog('/')}>Quizreo</h4>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted text-justify">
                            Password reset link will be sent to this email.
                        </Form.Text>
                    </Form.Group>
                    <Outlet/>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" type="submit" onClick={() => {
                        navigate('/reset_msg')
                    }}>
                        Reset
                    </Button>

                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/signup">Signup here</Link>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/login">Login here</Link>
                </Form>
            </div>
        </div>
    )
}
