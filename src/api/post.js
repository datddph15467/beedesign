import instance from "./instance";

export const getAll = () => {
    const url = "/blog";
    return instance.get(url)
}
export const get = (id) => {
    const url = `/blog/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/blog`
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/blog/${id}`;
    return instance.delete(url);
}
export const update = (post) => {
    const url = `/blog/${post.id}`;
    return instance.put(url, post);
}