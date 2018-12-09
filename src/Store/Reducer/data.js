import * as actionTypes from '../Action/types'

let initialState = {
    data: []
}

export const fetchUserStart = (state, action) => {
    console.log(`i am reducer fetchUserStart`)
    return {
        ...state
    }

}

export const fetchUserSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_START:
        console.log(`i am reducer`)
            return fetchUserStart(state, action)
        case actionTypes.FETCH_USER_SUCCESS:
            return fetchUserSuccess(state, action)
        default:
            return state
    }
}

export default reducer