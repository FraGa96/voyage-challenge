import React from 'react'
import cssClasses from './input.module.css'

const Input = (props) => {
    switch (props.type) {
        case 'text':
        case 'number':
        case 'date':
            return <input
                id={props.id}
                data-testid={props.id}
                className={cssClasses.input}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
        case 'select':
            return (
                <select
                    id={props.id}
                    name={props.id}
                    data-testid={props.id}
                    className={cssClasses.input}
                    value={props.value}
                    onChange={props.onInputChange}>
                    {props.options.map((op, i) => (
                        <option key={i} value={op}>{op}</option>
                    ))}
                </select>
            )
        default:
            return null
    }
}

export default Input