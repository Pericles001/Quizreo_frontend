import {Footer, SampleCard, Sidebar} from "../components";
import {Breakpoint} from "react-socks";
import {active} from "../components/Forms/Login/Login";
import client from "../api/axios";
import {useState} from "react";

export function DashboardPage() {
    const [users, setUsers] = useState([]);
    const user = active;

    const getAllUsers = async () => {
        const response = await client.get(`/`, {
            validateStatus: function (status) {
                return status < 500; // Reject only if the status code is greater than or equal to 500
            }
        });
        if (response.status === 302) {
            setUsers(response.data)
        }
    }
    getAllUsers().then(r => console.log("ok"));


    console.log(user);
    const displayUser = user.map((user) => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome {user.username}</h5>
                    <p className="card-text">You are logged in.</p>
                </div>
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <Breakpoint small down>
                <div className="row">
                    <div className="col-5">
                        <Sidebar/>
                    </div>
                    <div className="col-7">
                        <h1 className="mt-5 mb-5">Dashboard</h1>
                        <SampleCard title="Trending" quote="Survey example title" author="Pericles Adjovi"/>
                        <SampleCard title="Top Rated" quote="Survey example title" author="Pericles Adjovi"/>
                        <SampleCard title="Top Users" quote="Survey example title" author="Pericles Adjovi"/>
                    </div>
                </div>
                <Footer/>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="row">
                    <div className="col-3">
                        <Sidebar/>
                    </div>
                    <div className="col-9">
                        {displayUser}
                        <SampleCard title="Trending" quote="Survey example title" author="Pericles Adjovi"/>
                        <SampleCard title="Top Rated" quote="Survey example title" author="Pericles Adjovi"/>
                        <SampleCard title="Top Users" quote="Survey example title" author="Pericles Adjovi"/>

                    </div>
                </div>
                <Footer/>
            </Breakpoint>

        </div>
    );
}
