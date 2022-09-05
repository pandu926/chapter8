import React from 'react'

export const Input = (props) => {
  return (
    <div className="mb-3 col-sm-12 col-md-6">
    <label htmlFor={`${props.id}`} className="form-label">
    {`${props.title}`}
    </label>
    <input
    type={`${props.type || 'text'}`}
    className="form-control"
    // value={`${props.value || 'hapus'}`}
    id={`${props.id}`}
    onChange={props.set}
    />
    </div>
  )
}
