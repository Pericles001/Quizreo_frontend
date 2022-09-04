import {BreakpointProvider} from "react-socks";
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from "./pages/home";
import SignupPage from "./pages/authentication/signup";
import LoginPage from "./pages/authentication/login";
import ResetPage from "./pages/authentication/reset";
import {ResetMsgPage} from "./pages/status/post_reset";
import {UnknownMsgPage} from "./pages/status/unknown_route";

function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="signup" element={<SignupPage/>}/>
                    <Route path="reset" element={<ResetPage/>}/>
                    <Route path="reset_msg" element={<ResetMsgPage/>}/>
                    <Route path="*" element={<UnknownMsgPage/>}/>
                </Routes>

            </div>
        </BreakpointProvider>
    );
}

export default App;
