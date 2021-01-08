import axios from "axios"

const apiUsers = axios.create({ baseURL: "https://randomuser.me/api/?results=10" });

export const getUsers = () => {
    return apiUsers.get()
};