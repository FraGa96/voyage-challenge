import React from 'react'
import Input from 'components/Input'

const AppendField = (props) => (
    <div>
        <Input type='text' value={props.value} onInputChange={props.onChange} id={props.id} />
        <button type='button' onClick={props.append}>Add</button>
        <div>{props.message}</div>
    </div>
)

export default AppendField