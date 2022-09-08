import Card from 'react-bootstrap/Card';
import {Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router";

export function Profile() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("Pericls");
    const [firstname, setFirstname] = useState("Pericles");
    const [lastname, setLastname] = useState("Adjovi");
    const [email, setEmail] = useState("pgmai.com");
    const [password, setPassword] = useState("12345678");

    const handleSubmit = (e) => {

        try {
            e.preventDefault();
            console.log(username, firstname, lastname, email, password);
        } catch (e) {
            console.log(e);
        } finally {
            navigate("/");
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
                            </Form.Group>

                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userFirstName">
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" defaultValue={firstname}
                                              onChange={(e) => setFirstname(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userLastName">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" defaultValue={lastname}
                                              onChange={(e) => setLastname(e.target.value)}/>
                            </Form.Group>


                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userMail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="col-5" type="email" defaultValue={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>


                            <Form.Group className="mb-4 col-4 mx-auto" controlId="userPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="col-5" type="password" defaultValue={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            <button className="btn btn-secondary" onClick={handleSubmit}>Edit profile</button>

                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}