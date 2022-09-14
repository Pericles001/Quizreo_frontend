import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Login() {
    const [redStyle, setRedStyle] = useState("");
    const [UsrMsg, setUsrMsg] = useState("We'll never share your username with anyone else.");
    const [passMsg, setPassMsg] = useState("We'll never share your password with anyone else.");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const toLog = () => {
        navigate('/');
    }
    const handleSubmit = () => {
        try {
            console.log(username, password);
            if (username.length === 0 || password.length === 0) {
                setRedStyle("text-danger");
                if (username.length === 0) {
                    setUsrMsg("Username is required");
                } else if (username.length !== 0) {
                    setUsrMsg("We'll never share your username with anyone else.");
                }
                if (password.length === 0) {
                    setPassMsg("Password is required");
                } else if (password.length !== 0) {
                    setPassMsg("We'll never share your password with anyone else.");
                }
            } else {
                navigate('/dashboard')
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(username, password);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>Quizreo</h4>
                    <Form.Group controlId="formBasicUsername" className="mt-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username"
                                      onChange={(e) => setUsername(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {UsrMsg}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text id="WarningText" className={"text-muted text-justify " + redStyle}>
                            {passMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={() => {
                        handleSubmit()
                    }}>
                        Login
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/signup">Signup here</Link>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/reset">Forgot
                        password?</Link>
                </Form>
            </div>
        </div>
    )
}
