import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Reset() {
    const [email, setEmail] = React.useState("");
    const [emailMsg, setEmailMsg] = React.useState(" Password reset link will be sent to this email.");
    const navigate = useNavigate();
    const location = useLocation();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = () => {
        try {
            if (email.length === 0) {
                setEmailMsg("Email is required");
            } else if (!isValidEmail(email)) {
                setEmailMsg("Email is invalid");
            } else if (email.length !== 0) {
                setEmailMsg("Password reset link will be sent to this email.");
                navigate('/reset_msg')
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(email);
        }
    }

    return (
        <div className="container-fluid">

            <div className="row">
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={() => navigate('/')}>Quizreo</h4>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text className="text-muted text-justify">
                            {emailMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={handleSubmit}>
                        Reset
                    </Button>

                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/signup">Signup here</Link>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/login">Login here</Link>
                </Form>
            </div>
        </div>
    )
}
