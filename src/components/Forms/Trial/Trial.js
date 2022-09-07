import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Trial() {
    const [type, setType] = useState("");
    const toggleInput = () => {
    }
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
                    <Form.Group controlId="trialTitle" className="mt-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title"/>
                    </Form.Group>

                    <Form.Group controlId="trialType" className="mt-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Select type="text" placeholder="Enter type" >
                            <option value="Direct">Direct</option>
                            <option value="Survey">survey</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="trialAnswer" className="mt-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" placeholder="Enter content"/>

                    </Form.Group>



                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={()=> {
                        navigate('/dashboard')
                    }}>
                        Create
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/dashboard">Abort</Link>
                </Form>
            </div>
        </div>
    )
}
