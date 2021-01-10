import axios from "axios"

const apiUsers = axios.create({ baseURL: "https://randomuser.me/api/?results=20" });

export const getUsers = () => {
    return apiUsers.get()
};