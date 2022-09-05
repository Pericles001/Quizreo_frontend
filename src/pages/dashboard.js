import {Footer, Sidebar} from "../components";
import {Breakpoint} from "react-socks";

export function DashboardPage() {
    return (
        <div className="container-fluid">
            <Breakpoint small down>
                <div className="row">
                    <div className="col-5">
                        <Sidebar/>
                    </div>
                    <div className="col-7">
                        <h1 className="mt-5 mb-5">Dashboard</h1>
                        <p> You are welcome here</p>
                    </div>
                    <Footer/>
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="row">
                    <div className="col-3">
                        <Sidebar/>
                    </div>
                    <div className="col-9">
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </Breakpoint>

        </div>
    );
}
