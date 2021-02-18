import React from 'react'

const Field = (props) => {
	const {
		labelText,
		type,
		placeholder,
		name,
		value,
		onChange,
		id,
		error,
	} = props
	return (
		<div className="form-group">
			<label htmlFor={id}>{labelText}</label>
			<input
				id={id}
				type={type}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				name={name}
			/>
			{error ? <div className="invalid-feedback">{error}</div> : null}
		</div>
	)
}

export default Field
