import React, { useId } from 'react'

const Input = ({ label, type = "text",className="", ...props }) => {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id}>
                {label}
            </label>}

            <input type={type} className={`bg-white ${className}` } {...props} id={id} />
        </div>

    )
}

export default Input
