export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE'
export const ADD_COLOR = 'ADD_COLOR'

const changeFieldValue = (state, action) => {
    return {
        ...state,
        [action.field] : {
            ...state[action.field],
            value: action.value
        }
    }
}

const addColor = (state, action) => {
    const value = action.value.trim()
    if(value.length === 0 || state.color.options.some(op => op === value)) 
        return {
            ...state,
            message: 'Invalid color'
        }
    return {
        ...state,
        color: {
            ...state.color,
            value: value,
            options: state.color.options.concat(value)
        },
        message: ''
    }
}

export const formDataReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_FIELD_VALUE: return changeFieldValue(state, action)  
        case ADD_COLOR: return addColor(state, action)
        default:
            return state
    }
}
