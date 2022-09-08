import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Trial() {
    const [num, setNum] = useState(0);

    const handleInput = (e) => {
        setNum(e.target.value);
    }

    const setInputs = () => {
        let inputs = [];
        for (let i = 0; i < num; i++) {
            inputs.push(<Form.Group controlId="formBasicEmail">
                <Form.Label>Question {i + 1}</Form.Label>
                <Form.Select aria-label="Edit question">
                    <option>Choose...</option>
                    <option value="1">Open ended</option>
                    <option value="2">Multiple choice</option>
                    <option value="3">True/False</option>
                </Form.Select>
            </Form.Group>);
        }
        return inputs;
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
                        <Form.Select type="text" placeholder="Enter type">
                            <option value="Direct">Direct</option>
                            <option value="Survey">survey</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="trialTime" className="mt-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="number" aria-valuemin="0" aria-valuemax="50" placeholder="Enter time"/>
                    </Form.Group>


                    <Form.Group controlId="trialNumbers" className="mt-3">
                        <Form.Label>Settings</Form.Label>
                        <Form.Control type="number" aria-valuemin="0" aria-valuemax="50"
                                      placeholder="Enter number of questions" onChange={handleInput}/>
                    </Form.Group>


                    {setInputs()}

                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={() => {
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
