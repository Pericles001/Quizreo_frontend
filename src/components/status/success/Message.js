export function SuccessMsg(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="alert alert-success" role="alert">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    )
}
