import { Link, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";


export const DashBoard = () => {
    
    const history = useNavigate();
    const contadorRef = useRef(1);
    const timerRef = useRef<HTMLParagraphElement>(null)
    const [contador, setContador] = useState(0);

    const handleClick = () => history("/entrar");
    return (
        <div>
            <p ref={timerRef}></p>
            <p>DashBoard</p>
            <p>Contador: {contador}</p>
            <button onClick={() => {
                setContador(contadorRef.current++);
               
            }}>Acrescentar</button>
            <Link to="/entrar" >Login</Link>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
