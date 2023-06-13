import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { isSet } from "util/types";
let cont = 0;
export const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    
    
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputSenhaRef = useRef<HTMLInputElement>(null);
    const buttonEntrarRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
       console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(senha);
     }, [senha]);
    
    const SenhaLenght = useMemo(() => {
        if (senha.length >= 6) {
            return "Senha aceita!";
        } else {
            return "Senha menor que 6 dígitos, não aceita!";
        }
        
    }, [senha.length]) 
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(senha);
        if (inputEmailRef.current != null && inputSenhaRef.current != null && buttonEntrarRef.current != null) {
            inputEmailRef.current.placeholder = "E-mail";
            inputSenhaRef.current.placeholder = "Senha";
            buttonEntrarRef.current.style.marginLeft = "10px";
            buttonEntrarRef.current.style.borderRadius = "10px";
            buttonEntrarRef.current.style.backgroundColor = "#1C1C1C";
            buttonEntrarRef.current.style.color = "white";
            
        }
    }, []);
    return (
    <div id="div">
        <form action="">
        <p>{SenhaLenght}</p>
        <label>
            <span>Email:</span>
            <input type="email" value={email} onKeyDown={e => e.key === "Enter"? inputSenhaRef.current?.focus() : false} ref={inputEmailRef} onChange={e => setEmail(e.target.value)}/>
        </label><br /><br />
        <label>
            <span>Senha:</span>
            <input type="password"  ref={inputSenhaRef} onKeyDown={e => e.key === "Enter" ? buttonEntrarRef.current?.click() : null} value={senha} onChange={e => setSenha(e.target.value)}/>
        </label> 
        <button type="button" ref={buttonEntrarRef} onClick={handleEntrar}>entrar</button>
        </form>
    </div>
        
    )
}