import { Api } from "../ApiConfi"
import { ApiException } from "../ErrorException";

interface ITarefa {
    id: number;
    title: string;
    isComplete: boolean;
}

const create = async (dataCreate: Omit<ITarefa, "id">): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post("/tarefas", dataCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao tentar usar API!");
    }
}
const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get("/tarefas");
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao recuperar todos!");
    }


}
const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao recuperar só um!");
    }
}
const updateById = async (id: number, dataCreate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao atualizar!");
    }
}
const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao deletar!");
    }
}


export const TarefaService = () => {
    create;
    getAll;
    getById;
    updateById;
    deleteById;
}