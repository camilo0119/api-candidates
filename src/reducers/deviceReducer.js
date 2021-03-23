import { types } from "../types/types";

const initialState = {
    device: 'desktop'
}

export const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.deviceDesktop:
            return {
                device: 'desktop'
            }
        case types.deviceTablet:
            return {
                device: 'tablet'
            }
        case types.deviceMobile:
            return {
                device: 'mobile'
            }
    
        default:
            return state;
    }
}