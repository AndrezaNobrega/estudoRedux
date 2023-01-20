import {
    num_max_alterado,
    num_min_alterado
} from
'./actionsTypes'


//ActionCreator
export function alterarNumeroMinimo(novoNumero){
    return {
        type: num_min_alterado,
        payload: novoNumero,
    }
}

export function alterarNumeroMaximo(novoNumero){
    return {
        type: num_max_alterado,
        payload: novoNumero,
    }
}

