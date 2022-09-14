import Card from 'react-bootstrap/Card';
import {Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router";

export function Profile() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usernameMsg, setUsernameMsg] = useState("");
    const [firstnameMsg, setFirstnameMsg] = useState("");
    const [lastnameMsg, setLastnameMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

    const handleSubmit = () => {

        try {
            if (username.length === 0 || firstname.length === 0 || lastname.length === 0 || email.length === 0 || password.length === 0) {
                if (username.length === 0) {
                    setUsernameMsg("Username is required")
                } else if (username.length !== 0) {
                    setUsernameMsg("")
                }
                if (firstname.length === 0) {
                    setFirstnameMsg("First name is required")
                } else if (firstname.length !== 0) {
                    setFirstnameMsg("")
                }
                if (lastname.length === 0) {
                    setLastnameMsg("Last name is required")
                } else if (lastname.length !== 0) {
                    setLastnameMsg("")
                }
                if (email.length === 0) {
                    setEmailMsg("Email is required")
                } else if (email.length !== 0) {
                    setEmailMsg("")
                }
                if (password.length === 0) {
                    setPasswordMsg("Password is required")
                } else if (password.length !== 0) {
                    setPasswordMsg("")
                }

            } else {
                navigate('/dashboard');
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(username, firstname, lastname, email, password);
        }
    }

    return (
        <div className="container-fluid">
            <Card className="col-6   mx-auto p-3 mt-5">
                <Card.Header>{username}</Card.Header>
                <Card.Body>

                    <div>
                        <Form>
                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" defaultValue={username}
                                              onChange={(e) => setUsername(e.target.value)}/>
                                <Form.Text className="text-muted text-justify">
                                    {usernameMsg}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userFirstName">
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" defaultValue={firstname}
                                              onChange={(e) => setFirstname(e.target.value)}/>
                                <Form.Text className="text-muted text-justify">
                                    {firstnameMsg}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userLastName">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" defaultValue={lastname}
                                              onChange={(e) => setLastname(e.target.value)}/>
                                <Form.Text className="text-muted text-justify">
                                    {lastnameMsg}
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userMail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="col-5" type="email" defaultValue={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted text-justify">
                                    {emailMsg}
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="col-5" type="password" defaultValue={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                                <Form.Text className="text-muted text-justify">
                                    {passwordMsg}
                                </Form.Text>
                            </Form.Group>

                            <button className="btn btn-secondary" onClick={handleSubmit}>Edit profile</button>

                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}