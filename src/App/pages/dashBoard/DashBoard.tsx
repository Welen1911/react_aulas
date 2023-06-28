import { useCallback, useState } from "react";

interface IListItem {
    title: string;
    isSelected: boolean;
}

export const DashBoard = () => {
    const [getLista, setLista] = useState<IListItem[]>([]);
    
    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if ( e.key == "Enter") {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;
            e.currentTarget.value = "";

            setLista((oldLista) => {
                console.log(oldLista);
                
                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;
                
                return [...oldLista, {
                    title: value,
                    isSelected: false
                }];
            })
        }
    }, [])

    return (
        <div>
            <p>Lista</p>
            <input type="text"
            onKeyDown={handleInputKeyDown}
            
            />
            <p>{getLista.filter((ListItem) => ListItem.isSelected).length}</p>
            <ul>
                {getLista.map((ListItem) => {
                    return (
                        <li key={ListItem.title}><input checked={ListItem.isSelected} type="checkbox" onChange={() => {
                            setLista(oldLista => {
                                return oldLista.map(oldListItem => {
                                    const newSelected = oldListItem.title === ListItem.title ? !oldListItem.isSelected : oldListItem.isSelected;
                                    
                                    return {
                                        ...oldListItem, 
                                        isSelected: newSelected
                                    }
                                
                                })
                                
                            })
                        }} />{ListItem.title}</li>
                    );
                })}
            </ul>
        </div>
    )
}
