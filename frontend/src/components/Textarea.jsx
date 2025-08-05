import React, {useId} from 'react'

const Textarea = ({className="", ...props}) => {
    const id = useId();
  return (
    <div>

      <textarea id={id} 
      {...props}
      className={`bg-white border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}>

      </textarea>
    </div>
  )
}

export default Textarea
