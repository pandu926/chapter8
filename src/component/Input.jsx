import React from 'react'

export const Input = (props) => {
  return (
    <div className="mb-3 col-sm-12 col-md-6">
    <label htmlFor={`${props.id}`} className="form-label">
    {`${props.title}`}
    </label>
    <input
    type={`${props.id}`}
    className="form-control"
    id={`${props.id}`}
    onChange={props.set}
    />
    </div>
  )
}
