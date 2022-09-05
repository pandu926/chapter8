import React from 'react'

const Button = (props) => {
  return (
    <button type={`${props.type || ''}` } className={`${props.class || 'btn btn-danger'}` }>
        {props.name}
    </button>
  )
}

export default Button