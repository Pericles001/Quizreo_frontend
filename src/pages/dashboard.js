import {Footer, SampleCard, Sidebar} from "../components";
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
                        <h2 className="mt-5 mb-5">Welcome <h6>Pericles Adjovi</h6></h2>
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
