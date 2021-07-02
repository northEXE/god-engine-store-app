import React from 'react'

function InputField(props){
    return(
        <div>
            <div className="input-field">
                <label htmlFor={props.htmlFor}>{props.label}</label>
                {props.children}
            </div>
        </div>
    )
}

export default InputField