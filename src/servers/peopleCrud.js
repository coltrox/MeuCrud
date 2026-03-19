import { API_URL } from "./configApi";


const headers = {
    "Content-Type": "application/json",
    "Bypass-Tunnel-Reminder": "true" 
};

export async function getPeople() {
    const response = await fetch(`${API_URL}/people`, {
        method: "GET",
        headers: headers
    });
    
    const data = await response.json();
    return data;
}

export async function createPerson(person) {
    const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(person)
    });

    return response.json();
}

export async function updatePerson(id, person) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(person)
    });

    return response.json();
}

export async function deletePerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE",
        headers: {
            "Bypass-Tunnel-Reminder": "true"
        }
    });
    
    if (!response.ok) {
        throw new Error("Erro ao deletar registro");
    }
}