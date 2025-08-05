import React from 'react'

const Button = ({className="",children, textColor= 'text-white', bgColor='bg-blue-500', type='button', ...props }) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button
