import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function updateTasks(id, task) {
    for(let i = 0; i <= id.length; i++) {
        if(i !== id.length) {
            axios.put(apiUrl + "/" + id[i], task);
        }
    }
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}

export function deleteAll(id) {
    for(let i = 0; i <= id.length; i++){
        if(i !== id.length) {
            axios.delete(apiUrl + "/" + id[i]);
        }
    }
}
