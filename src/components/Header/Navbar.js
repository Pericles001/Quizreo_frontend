import React from 'react';
import './_Navbar.css';
import {Breakpoint} from "react-socks";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
    return (
        <div className="mb-5">
            <Breakpoint small down>
                <nav className="Navbar navbar text-center fixed-top mb-5" style={{borderBottom: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1 mx-auto">Quizreo</span>
                </nav>
            </Breakpoint>
            <Breakpoint medium up>
                <nav className="p-2 Navbar navbar" style={{borderBottom: "black 2px solid"}}>
                    <span className="navbar-brand mb-0 h1">Quizreo</span>
                </nav>
            </Breakpoint>

        </div>
    );
}
