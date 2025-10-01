import api from "./api";
import qs from "qs";

export async function getCommentList(page: number = 1, pageSize: number = 10){
    const query = qs.stringify(
        {
            pagination: {
                page,
                pageSize,
            },
            populate: {
                article: "*",
                user: "*",
            },
            sort: ["title:desc"],
        },
        { encodeValuesOnly: true }
    );
    const response = await api.get(`/comments?${query}`);
    return response.data;

}

export async function getCommentById(id: string){
    const response = await api.get(`/comments/${id}`);
    return response.data;
}

export async function deleteCommentById(id: string){
    const response = await api.get(`/comments/${id}`);
    return response.data;
}

export async function createComment(content: string, article: number){
    const response = await api.get(`/comments`, {
        data:{
            content,
            article
        }
    });
    return response.data;
}

export async function updateComment(id: string, content: string) {
    const response = await api.put(`/comments/${id}`,{
        data: {
            content,
        }
    });
    return response.data;
}