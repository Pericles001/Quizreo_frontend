import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

export function Quiz() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [answer, setAnswer] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [contentMsg, setContentMsg] = useState("");
    const [answerMsg, setAnswerMsg] = useState("");
    const [redStyle, setRedStyle] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const toLog = () => {
        navigate('/');
    }

    const handleSubmit = () => {
        try {
            if (title.length === 0 || content.length === 0 || answer.length === 0) {
                if (title.length === 0) {
                    setTitleMsg("Title is required")
                } else if (title.length !== 0) {
                    setTitleMsg("")
                }
                if (content.length === 0) {
                    setContentMsg("Content is required")
                } else if (content.length !== 0) {
                    setContentMsg("")
                }
                if (answer.length === 0) {
                    setAnswerMsg("Answer is required")
                } else if (answer.length !== 0) {
                    setAnswerMsg("")
                }
            } else {
                navigate('/dashboard')
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(title, content, answer);
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Form className="mx-auto col-md-4 shadow"
                      style={{backgroundColor: "#D9D9D9", marginTop: "100px", marginBottom: "100px"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>Quizreo</h4>
                    <Form.Group controlId="quizTitle" className="mt-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {titleMsg}
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="quizContent" className="mt-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" placeholder="Enter content"
                                      onChange={(e) => setContent(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {contentMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="quizAnswer" className="mt-3">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="text" placeholder="Enter answer"
                                      onChange={(e) => setAnswer(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {answerMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="quizRating" className="mt-3">
                        {/*<Form.Label >rating</Form.Label>*/}
                        <Form.Control type="hidden" value="0"/>

                    </Form.Group>


                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={handleSubmit}>
                        Create
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/dashboard">Abort</Link>
                </Form>
            </div>
        </div>
    )
}
