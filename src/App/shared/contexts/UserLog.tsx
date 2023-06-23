import { Children, ReactNode, createContext, useCallback } from "react";

interface IUserLog {
    nome: string|null;
    logout: () => void;
}

interface IUserLogProvider {
    children: React.ReactNode
}
export const UserLogContext = createContext<IUserLog>({} as IUserLog);

export const UserLogProvider: React.FC<IUserLogProvider> = ({children}) => {
    let letnome = "Rayane";

    const handleClick = useCallback(() => {
        console.log("Logout realizado!");
    },[])

    return (
        <UserLogContext.Provider value={{nome: letnome, logout: handleClick}}>
            {children}
        </UserLogContext.Provider>
    );
}