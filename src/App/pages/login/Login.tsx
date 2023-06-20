import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { isSet } from "util/types";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
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
        
        <div>
        <form>
        <InputLogin
            label="E-mail"
            value={email}
            type="email"
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputSenhaRef.current?.focus()}
            ref={inputEmailRef}
        ></InputLogin>
        <InputLogin
        label="Senha"
        value={senha}
        type="password"
        onChange={newValue => setSenha(newValue)}
        onPressEnter={() => buttonEntrarRef.current?.focus()}
        ref={inputSenhaRef}    
        ></InputLogin>
        {/* <button type="button" ref={buttonEntrarRef} onClick={handleEntrar}>entrar</button> */}
        
        <ButtonLogin 
            type="button"
            onclick={handleEntrar}
        >Entrar</ButtonLogin>
        </form>
    </div>
        
    )
}