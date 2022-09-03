import {useLocation, useNavigate} from "react-router";

export const ChangeLocation = props => {
    const navigate = useNavigate();
    const location = useLocation();

    navigate(props.to, {state: location.state});
};
