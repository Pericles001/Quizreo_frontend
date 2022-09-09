
import {BreakpointProvider} from "react-socks";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {db} from "./firebase.config";
import {collection, getDocs} from "firebase/firestore";
import {useState, useEffect} from "react";
import React from "react";
import HomePage from "./pages/home";
import SignupPage from "./pages/authentication/signup";
import LoginPage from "./pages/authentication/login";
import ResetPage from "./pages/authentication/reset";
import {ResetMsgPage} from "./pages/status/post_reset";
import {UnknownMsgPage} from "./pages/status/unknown_route";
import {DashboardPage} from "./pages/dashboard";
import {CreateSurveyPage} from "./pages/surveys/create";
import {ListSurveyPage} from "./pages/surveys/list";
import {CreateQuizPage} from "./pages/Quiz/create";
import {ListQuizPage} from "./pages/Quiz/list";
import {CreateTrialPage} from "./pages/Trial/create";
import {ListTrialPage} from "./pages/Trial/list";
import {ProfilePage} from "./pages/user/profile";
import {AccountPage} from "./pages/user/account";
import {SharePage} from "./pages/share/share";

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
                    <Route path="dashboard" element={<DashboardPage/>}/>
                    <Route path="create_survey" element={<CreateSurveyPage/>}/>
                    <Route path="create_quiz" element={<CreateQuizPage/>}/>
                    <Route path="create_trial" element={<CreateTrialPage/>}/>
                    <Route path="list_survey" element={<ListSurveyPage/>}/>
                    <Route path="list_quiz" element={<ListQuizPage/>}/>
                    <Route path="list_trial" element={<ListTrialPage/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="account" element={<AccountPage/>}/>
                    <Route path="share" element={<SharePage/>}/>
                    <Route path="*" element={<UnknownMsgPage/>}/>
                </Routes>

            </div>
        </BreakpointProvider>
    );
}

export default App;
