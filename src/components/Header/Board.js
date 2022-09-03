import {Breakpoint} from "react-socks";
import {Navbar} from "./Navbar";
import {useLocation, useNavigate} from "react-router";

export function Board() {

    const navigate = useNavigate();
    const location = useLocation();
    const toLog = () => {
        location.pathname === "/login" ? navigate("/signup") : navigate("/login");
    }

    return (
        <div className="container-fluid">
            <Breakpoint small down>
                <Navbar/>

                <div className=" mb-5 col-12 mx-auto mb-5" style={{marginTop: "200px", marginBottom: "100px"}}>
                    <img src="https://i.imgur.com/GNAN8jG.gif" width="80%" alt="Quizreo rapid description"/>
                </div>
                <div className="mt-5 mb-3 d-grid gap-2 col-6 mx-auto" id="StartSec">
                    <button className="btn btn-secondary shadow mb-3" style={{marginTop: "200px"}} type="submit"><h4>Get
                        Started</h4></button>
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="row">
                    <Navbar/>
                    <div className="mt-5 mb-5 col-12 mx-auto mb-5">
                        <img src="https://i.imgur.com/GNAN8jG.gif" width="80%" alt="Quizreo rapid description"/>
                    </div>
                    <div className="mt-5 mb-5 d-grid gap-2 col-6 mx-auto" id="StartSec">
                        <button className="btn btn-secondary shadow mb-3" type="submit" onClick={toLog}><h4>Get
                            Started</h4></button>
                    </div>
                </div>
            </Breakpoint>
        </div>
    )
}
