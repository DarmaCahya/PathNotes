import api from "./api";

export async function getCategoryList() {
    const response = await api.get("/categories");
    return response.data;
}

export async function getCategoryById(id: string){
    const response = await api.get(`/categories/${id}`)
    return response.data;
}

export async function deleteCategoryById(id: string){
    const response = await api.delete(`/categories/${id}`)
    return response.data;
}

export async function createCategory(name: string) {
    const response = await api.post("/categories", {
        data: {
            name,
        },
    });
    return response.data;
}

export async function updateCategory(id: string, name: string) {
    const response = await api.put(`/categories/${id}`, {
        data: {
            name,
        },
    });
    return response.data;
}