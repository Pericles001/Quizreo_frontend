import {Footer, StatusMsg} from "../../components";

export function ResetMsgPage() {
    return (
        <div>
            <StatusMsg color="alert alert-success" message="An email has successfully been sent to your address"/>
            <Footer/>
        </div>
    )
}
