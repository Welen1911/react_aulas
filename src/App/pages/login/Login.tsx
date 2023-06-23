import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { isSet } from "util/types";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";
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
    
    const {nome} = useUsuarioLogado();

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(senha);
        history("/pagina-inicial");
        
    }, []);
    return (
        
        <div>
        <form>
            <p>{nome}</p>
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