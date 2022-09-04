import {Footer, StatusMsg} from "../../components";

export function UnknownMsgPage() {
    return (
        <div>
            <StatusMsg color="alert alert-danger" message="Undefined route or bad gateway"/>
            <Footer/>
        </div>
    )
}
