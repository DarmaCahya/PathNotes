import api from "./api";

export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file); 

    const response = await api.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}