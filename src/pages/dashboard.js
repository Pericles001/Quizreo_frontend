import {Footer, SampleCard, Sidebar} from "../components";
import {Breakpoint} from "react-socks";
import {active} from "../components/Forms/Login/Login";
import {useState} from "react";

export function DashboardPage() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([active]);

    // const displayUser = user.map((user) => {
    // return (
    //     <div className="card">
    //         <div className="card-body">
    //             <h5 className="card-title">Welcome {user.username}</h5>
    //             <p className="card-text">You are logged in.</p>
    //         </div>
    //     </div>
    // )
    // })

    const displayUser = user.filter((user) => {
        const last = user.length - 1
        const lastUser = user[last]
        return lastUser.username
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
                        {console.log(displayUser)}
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
