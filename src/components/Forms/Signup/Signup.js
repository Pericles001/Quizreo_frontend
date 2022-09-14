import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function Signup() {
    const [redStyle, setRedStyle] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstnameMsg, setFirstnameMsg] = useState("We'll never share your firstname with anyone else.");
    const [lastnameMsg, setLastnameMsg] = useState("We'll never share your lastname with anyone else.");
    const [usernameMsg, setUsernameMsg] = useState("We'll never share your username with anyone else.");
    const [emailMsg, setEmailMsg] = useState("We'll never share your email with anyone else.");
    const [passwordMsg, setPasswordMsg] = useState("We'll never share your password with anyone else.");
    const navigate = useNavigate();

    const toLog = () => {
        navigate('/');
    }

    const handleSubmit = () => {
        try {
            if (firstname.length === 0 || lastname.length === 0 || username.length === 0 || email.length === 0 || password.length === 0) {
                setRedStyle("text-danger");
                if (firstname.length === 0) {
                    setFirstnameMsg("Firstname is required");
                } else if (firstname.length !== 0) {
                    setFirstnameMsg("");
                }
                if (lastname.length === 0) {
                    setLastnameMsg("Lastname is required");
                } else if (lastname.length !== 0) {
                    setLastnameMsg("");
                }
                if (username.length === 0) {
                    setUsernameMsg("Username is required");
                } else if (username.length !== 0) {
                    setUsernameMsg("");
                }
                if (email.length === 0) {
                    setEmailMsg("Email is required");
                } else if (email.length !== 0) {
                    setEmailMsg("");
                }
                if (password.length === 0) {
                    setPasswordMsg("Password is required");
                } else if (password.length !== 0) {
                    setPasswordMsg("");
                }
            } else {
                navigate('/dashboard')
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(firstname, lastname, username, email, password);
        }
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
                        <Form.Control type="text" placeholder="Enter First Name"
                                      onChange={(e) => setFirstname(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {firstnameMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName" className="mt-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"
                                      onChange={(e) => setLastname(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {lastnameMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicSurName" className="mt-3">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name"
                                      onChange={(e) => setUsername(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {usernameMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {emailMsg}
                        </Form.Text>

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {passwordMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={handleSubmit}>
                        Signup
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/login">Login here</Link>
                </Form>
            </div>
        </div>
    )
}
