import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "./store/actions"

export default () => {
    const users = useSelector((state) => { return state.users; });
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchUsersAction()); }, [])

    return <>{users.length > 0 ?
        users.map((user, index) => <div key={index}> {user.email}</div>)
        : <> loading</>}</>
}
