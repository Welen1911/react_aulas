import { Link, useNavigate } from "react-router-dom"

export const DashBoard = () => {
    const history = useNavigate();

    const handleClick = () => history("/entrar");
    return (
        <div>
            <p>DashBoard</p>
            <Link to="/entrar" >Login</Link>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

