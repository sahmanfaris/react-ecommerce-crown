import './FormInput.styles.scss'

const FormInput = ({ handleChange, label, id, ...props }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...props} />
      {label && (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
