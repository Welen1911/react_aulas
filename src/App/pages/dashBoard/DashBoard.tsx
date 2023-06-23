import { Link, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUsuarioLogado } from "../../shared/hooks/UseUsuarioLogado";


export const DashBoard = () => {
    
    const history = useNavigate();
    const contadorRef = useRef(1);
    const timerRef = useRef<HTMLParagraphElement>(null)
    const [contador, setContador] = useState(0);
    
    const {nome, logout} = useUsuarioLogado();

    
    return (
        <div>
            <p ref={timerRef}></p>
            <p>DashBoard</p>
            <p>{nome}</p>
            <p>Contador: {contador}</p>
            <button onClick={() => {
                setContador(contadorRef.current++);
               
            }}>Acrescentar</button>
            <Link to="/entrar" >Login</Link>
            <button onClick={logout}>logout</button>
        </div>
    )
}
