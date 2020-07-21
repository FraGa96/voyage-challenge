import React, { createContext, useContext, useReducer } from 'react'
import * as reducer from './formReducer'

const FormContext = createContext()

const initialFormData = {
    name: {
        label: 'Name',
        type: 'text',
        value: ''
    },
    birthday: {
        label: 'Birthday',
        type: 'date',
        value: new Date()
    },
    color: {
        label: 'Favorite Color',
        type: 'select',
        value: 'Blue',
        options: ['Blue', 'Yellow', 'Red', 'Other']
    }
}

export const FormProvider = ({ children }) => {
    const [formData, dispatchUserData] = useReducer(reducer.formDataReducer, initialFormData)

    const changeFieldValue = (field, value) => {
        dispatchUserData({
            type: reducer.CHANGE_FIELD_VALUE,
            field,
            value
        })
    }
    
    const addColor = (value) => {
        dispatchUserData({
            type: reducer.ADD_COLOR,
            value
        })
    }

    return (
        <FormContext.Provider value={{ formData, changeFieldValue, addColor }}>
            {children}
        </FormContext.Provider>
    )
}

const useForm = () => useContext(FormContext)

export default useForm