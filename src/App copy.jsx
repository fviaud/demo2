import React, { useState, useEffect } from "react"
import axios from "axios"

const API = "https://randomuser.me/api/?results=10";

export const apiUsers = axios.create({ baseURL: API });
export const getUsers = () => {
    return apiUsers.get()
};

export default () => {
    const [users, setUsers] = useState([])
    console.log("je passe ici")

    useEffect(() => {
        getUsers().then(response => setUsers(response.data.results))
    }, [])

    return <>{users.length > 0 ?
        users.map((user, index) => <div key={index}> {user.email}</div>)
        : <> loading</>}</>
}
