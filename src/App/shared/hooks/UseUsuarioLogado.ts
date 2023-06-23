import { useContext } from "react";
import { UserLogContext } from "../contexts";


export const useUsuarioLogado =() => {
    const context = useContext(UserLogContext);
    return context;
}