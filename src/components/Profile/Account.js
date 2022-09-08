import Card from 'react-bootstrap/Card';
import {Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router";

export function Account() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("Pericls");
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="container-fluid">
            <Card className="col-6   mx-auto p-3 mt-5">
                <Card.Header>{username}</Card.Header>
                <Card.Body>

                    <div className=" mx-auto">
                        <h5>You can delete your account her or diconnect </h5>
                    </div>
                    <div className="justify-content-center align-content-around mx-auto">
                        <button className="col-3 me-2 btn btn-sm btn-warning" onClick={handleClick}> Disconnect</button>
                        <button className="col-3 ms-2 btn btn-sm btn-danger" onClick={handleClick}> Delete me</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}