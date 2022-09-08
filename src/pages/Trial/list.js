import {Footer} from "../../components";
import {TrialTable} from "../../components/Table/Trial/Table";


export function ListTrialPage() {
    return (
        <div className="container-fluid mt-5 p-3">
            <TrialTable/>
            <Footer/>
        </div>
    )
}
