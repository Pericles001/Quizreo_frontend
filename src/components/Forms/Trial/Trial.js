import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Trial() {
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [time, setTime] = useState("");
    const [input, setInput] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [typeMsg, setTypeMsg] = useState("");
    const [timeMsg, setTimeMsg] = useState("");
    const [inputMsg, setInputMsg] = useState("");

    const handleInput = (e) => {
        setNum(e.target.value);
    }

    const setInputs = () => {
        let inputs = [];
        for (let i = 0; i < num; i++) {
            inputs.push(<Form.Group controlId="formBasicEmail">
                <Form.Label>Question {i + 1}</Form.Label>
                <Form.Select aria-label="Edit question" onChange={(e) => setInput(e.target.value)}>
                    <option>Choose...</option>
                    <option value="Open ended">Open ended</option>
                    <option value="Multiple choice">Multiple choice</option>
                    <option value="True False">True/False</option>
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

    const handleSubmit = () => {
        try {
            if (title.length === 0 || type.length === 0 || time.length === 0 || input.length === 0) {
                if (title.length === 0) {
                    setTitleMsg("Title is required")
                } else if (title.length !== 0) {
                    setTitleMsg("")
                }
                if (type.length === 0) {
                    setTypeMsg("Type is required")
                } else if (type.length !== 0) {
                    setTypeMsg("")
                }
                if (time.length === 0) {
                    setTimeMsg("Time is required")
                } else if (time.length !== 0) {
                    setTimeMsg("")
                }
                if (input.length === 0) {
                    setInputMsg("Input is required")
                } else if (input.length !== 0) {
                    setInputMsg("")
                }
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(title, type, time, num, setInputs())
        }
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
                        <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
                        <Form.Text className="text-muted text-justify">
                            {titleMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="trialType" className="mt-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Select type="text" placeholder="Enter type" onChange={(e) => setType(e.target.value)}>
                            <option value="Direct">Direct</option>
                            <option value="Survey">survey</option>
                        </Form.Select>
                        <Form.Text className="text-muted text-justify">
                            {typeMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="trialTime" className="mt-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="number" aria-valuemin="0" aria-valuemax="50" placeholder="Enter time"
                                      onChange={(e) => setTime(e.target.value)}/>
                        <Form.Text className="text-muted text-justify">
                            {timeMsg}
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="trialNumbers" className="mt-3">
                        <Form.Label>Settings</Form.Label>
                        <Form.Control type="number" aria-valuemin="0" aria-valuemax="50"
                                      placeholder="Enter number of questions" onChange={handleInput}/>
                        <Form.Text className="text-muted text-justify">
                            {inputMsg}
                        </Form.Text>
                    </Form.Group>


                    {setInputs()}

                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={handleSubmit}>
                        Create
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/dashboard">Abort</Link>
                </Form>
            </div>
        </div>
    )
}
