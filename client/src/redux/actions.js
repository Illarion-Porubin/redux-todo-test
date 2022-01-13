import {
    INPUT_TEXT,
    INPUT_CREATE,
    INPUT_UPDATE,
    INPUT_DELETE,
    INPUT_DELETE_ALL,
    INPUT_COMPLETED_ALL,
    INPUT_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from "./types";

import {
    getTasks,
    // addTask,
    // updateTask,
    // updateTasks,
    // deleteTask,
    // deleteAll
} from "../../src/services/taskServices";

export function inputCreate(text) {
    return {
        type: INPUT_CREATE,
        data: { text }
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function inputUpdate(id, text) {
    return {
        type: INPUT_UPDATE,
        data: { text, id }
    }
}

export function inputDelete(id) {
    return {
        type: INPUT_DELETE,
        id
    }
}

export function inputDeleteAll() {
    return {
        type: INPUT_DELETE_ALL
    }
}

export function inputCompletedAll() {
    return {
        type: INPUT_COMPLETED_ALL
    }
}

/// loading
export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        });
        setTimeout(() => {
            dispatch(errorOff());
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}


export function inputLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await getTasks()
                console.log(response.data, 'DATAAAAAA')
            setTimeout(() => {
                dispatch({
                    type: INPUT_LOAD,
                    data: response.data
                });
                dispatch(loaderOff())
            }, 1000);
        } catch (error) {
            dispatch(errorOn('ОШИБКА API'))
            dispatch(loaderOff())
        }        
    }
}
