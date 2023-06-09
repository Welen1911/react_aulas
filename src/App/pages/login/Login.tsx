import { useNavigate } from "react-router-dom"

export const Login = () => {
    const history = useNavigate();

    const handleClick = () => history("/pagina-inicial");
    return (
        <div>
            Nome:<input type="text" /><br />
            Idade:<input type="number"/><br />
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}