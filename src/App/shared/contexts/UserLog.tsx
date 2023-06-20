import { Children, createContext } from "react";

interface IUserLog {
    nome: string|null
}

interface IUserLogProvider {
    children: React.ReactNode
}
const UserLogContext = createContext<IUserLog>({} as IUserLog);

export const UserLogProvider: React.FC<IUserLogProvider> = ({children}) => {
    let letnome: string|null =  prompt("Qual o seu nome? ");
    return (
        <UserLogContext.Provider value={{nome: letnome}}>
            {children}
        </UserLogContext.Provider>
    );
}