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
            e.currentTarget.value = "";

            if (getLista.some((ListItem) => ListItem.title === value)) return ;

            const tarefa: Omit<ITarefa, "id"> = {
                title: value,
                isComplete: false,
            }
            
            TarefaConstService.create(tarefa).then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista((oldLista) => {
                        console.log(oldLista);
                        
                        
                        return [...oldLista, result];
                    })
                }
            });
        }
    }, [getLista])

    const hadleToggleComplete = useCallback((id: number) => {
        
        const tarefaUpdate = getLista.find((tarefa) => tarefa.id == id);
        if (!tarefaUpdate) return ;

        TarefaConstService.updateById(id, {
            ...tarefaUpdate,
            isComplete: !tarefaUpdate.isComplete
        }).then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista(oldLista => {
                    return oldLista.map(oldListItem => {
                        if (oldListItem.id == id) return result;
        
                        return oldListItem;
                        
                    })
                    
                    
                })
            }
        })
        
        
        
        
    }, [getLista]);

    const handleDelete = useCallback((id: number) => {
        const tarefaDelete = getLista.find(tarefa => tarefa.id == id);
        if (!tarefaDelete) return;

        TarefaConstService.deleteById(id).then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                setLista(oldLista => {
                    return oldLista.filter(oldListItem => oldListItem.id != id);
                    })
                }
            })
        }, [getLista])
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
                        <li key={ListItem.id}><input checked={ListItem.isComplete} type="checkbox" 
                        onChange={() => {

                            hadleToggleComplete(ListItem.id);
                           
                        }} />{ListItem.title}  <button onClick={() => handleDelete(ListItem.id)}>Excluir</button></li>
                    );
                })}
            </ul>
        </div>
    )
}
