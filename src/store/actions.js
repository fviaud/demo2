import { getUsers } from "../api/api.users"
import 'regenerator-runtime/runtime'

export const FETCH_USERS_STATE = "fetch users state";

export const fetchUsersAction = () => {
    return async (dispatch) => {
        try {
            const response = await getUsers()
            console.log("response")
            dispatch(fetchUsersStateAction(response.data.results));
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchUsersStateAction = (data) => {
    return {
        type: FETCH_USERS_STATE,
        data
    }
}