import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => api.get("/posts");
export const createPost = (post: any) => api.post("/posts", post);
export const updatePost = (id: number, post: any) =>
  api.put(`/posts/${id}`, post);
export const deletePost = (id: number) => api.delete(`/posts/${id}`);
