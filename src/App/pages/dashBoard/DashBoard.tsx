import { useCallback, useState } from "react";

export const DashBoard = () => {
    const [getLista, setLista] = useState<string[]>([]);
    
    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if ( e.key == "Enter") {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;
            e.currentTarget.value = "";

            setLista((oldLista) => {
                console.log(oldLista);
                if (oldLista.includes(value)) return oldLista;
                return [...oldLista, value];
            })
        }
    }, [])

    const handleLimparClick = useCallback(() => {
        setLista((oldLista) => {
            const limpar = oldLista.pop();
            return [...oldLista];
        });
    }, [])

    return (
        <div>
            <p>Lista</p>
            <input type="text"
            onKeyDown={handleInputKeyDown}
            
            />
            <ul>
                {getLista.map((value) => {
                    return (
                        <li key={value}>{value}</li>
                    );
                })}
            </ul>
            <button onClick={handleLimparClick}>Limpar</button>
        </div>
    )
}
