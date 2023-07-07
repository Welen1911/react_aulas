import { SetStateAction, useCallback, useEffect, useState } from "react";
import {ITarefa, TarefaConstService} from "../../shared/services/api/tarefas/TarefaService";
import { ApiException } from "../../shared/services/api/ErrorException";

export const DashBoard = () => {
    const [getLista, setLista] = useState<ITarefa[]>([]);
    
    useEffect(() => {
        TarefaConstService.getAll().then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista(result);
            }
        });
    }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if ( e.key == "Enter") {
            if (e.currentTarget.value.trim().length === 0) return;
            
            const value = e.currentTarget.value;
            const tarefa: Omit<ITarefa, "id"> = {
                title: value,
                isComplete: false,
            }
            
            TarefaConstService.create(tarefa).then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                }
            });
            
            e.currentTarget.value = "";

            setLista((oldLista) => {
                console.log(oldLista);
                
                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;
                
                return [...oldLista, {
                    id: oldLista.length,
                    title: value,
                    isComplete: false
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
            <p>{getLista.filter((ListItem) => ListItem.isComplete).length}</p>
            <ul>
                {getLista.map((ListItem) => {
                    return (
                        <li key={ListItem.id}><input checked={ListItem.isComplete} type="checkbox" onChange={() => {
                            
                            TarefaConstService.updateById(ListItem.id,ListItem).then((result) => {
                                if (result instanceof ApiException) {
                                    alert(result.message);
                                }
                                });

                            setLista(oldLista => {
                                return oldLista.map(oldListItem => {
                                    const newSelected = oldListItem.title === ListItem.title ? !oldListItem.isComplete : oldListItem.isComplete;
                                    
                                    return {
                                        ...oldListItem, 
                                        isComplete: newSelected
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
