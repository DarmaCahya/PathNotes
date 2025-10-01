import api from "./api";
import qs from "qs";

export async function getArticleList(page: number = 1, pageSize: number = 10, title?: string, category?: string){
    const query = qs.stringify(
        {
            pagination: {
                page,
                pageSize,
            },
            populate: {
                comments: {
                populate: ["user"],
                },
                user: "*",
                category: "*",
            },
            filters: {
                ...(title ? { title: { $eqi: title } } : {}),
                ...(category ? { category: { name: { $eqi: category } } } : {}),
            },
        },
        { encodeValuesOnly: true }
    );
    const response = await api.get(`/articles?${query}`);
    return response.data;  
}

export async function getArticleById(id: string) {
    const response = await api.get(`/articles/${id}`);
    return response.data;
}

export async function deleteArticleById(id: string) {
    const response = await api.get(`/articles/${id}`);
    return response.data;
}

export async function createArticle(title: string, description: string, cover_image_url: string, category: number) {
    const response = await api.post("/articles", {
        data: {
            title,
            description,
            cover_image_url,
            category,
        }
    })
    return response.data;
}

export async function updateArticle(id: string, title: string, description: string, cover_image_url: string, category: number) {
    const response = await api.post(`/articles/${id}`, {
        data: {
            title,
            description,
            cover_image_url,
            category,
        }
    })
    return response.data;
}