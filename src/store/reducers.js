import * as actions from "./actions";

export const users = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_USERS_STATE:
            return [...action.data]
        default:
            return state
    }
}