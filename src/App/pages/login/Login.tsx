import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    const handleEntrar = () => { 
        let h1 = document.createElement("h1");
        h1.innerHTML = `O seu E-mail é ${email}`;
        document.getElementById("div")?.appendChild(h1);

        let h2 = document.createElement("h2");
        h2.innerHTML = "A sua senha é "+senha;
        document.getElementById("div")?.appendChild(h2);
    // history("/pagina-inicial");
    }
    return (
        <div id="div">
          <form action="">
            <label>
                <span>Email:</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label><br /><br />
            <label>
                <span>Senha:</span>
                <input type="password"  value={senha} onChange={e => setSenha(e.target.value)}/>
            </label> 
            <button type="button" onClick={handleEntrar}>entrar</button>
          </form>
        </div>
        
    )
}