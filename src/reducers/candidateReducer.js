import { types } from "../types/types"

const initialState = {
    candidates: []
}

export const candidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveCandidate:
            return {
                candidates: action.payload
            }
        default: 
            return state;
    }
}