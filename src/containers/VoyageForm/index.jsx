import React, { useState } from 'react'
import useForm from 'contexts/FormContext/FormContext'
import Input from 'components/Input'
import axiosInstance, {FORM_DATA_ENDPOINT} from 'services/axiosInstance'
import AppendField from './AppendField'
import cssClasses from './voyageForm.module.css'

const VoyageForm = () => {
    const { formData, changeFieldValue, addColor } = useForm()
    const [newColor, setNewColor] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axiosInstance.post(FORM_DATA_ENDPOINT, {
                name: formData.name.value.trim(),
                birthday: formData.birthday.value,
                favoriteColor: formData.color.value
            })
            setMessage('Success!')
        }catch(err) {
            setMessage("Something failed!")
        }
    }

    const changeColor = () => {
        addColor(newColor) 
        setNewColor('')
    }

    let fields = []
    for (let key in formData) {
        const field = formData[key]
        if (field.label) {
            fields.push({
                id: key,
                ...field
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={cssClasses.voyageForm}>
                {
                    fields.map(field => (
                        <Input
                            key={field.id}
                            {...field}
                            onInputChange={(e) => changeFieldValue(field.id, e.target.value)} />
                    ))
                }
                {
                    formData.color.value === 'Other' ?
                        (
                            <AppendField 
                                value={newColor} 
                                onChange={(e) => setNewColor(e.target.value)}  
                                id='newColor'
                                append={changeColor}
                                message={formData.message} />
                        )
                        : null
                }
            </div>
            <div>
                <div>
                    {message}
                </div>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default VoyageForm