import React from 'react';

function InputDefault(props) {

  const { Value, title, type, placeholder, ...newProps} = props;

  return (
    <div className="InputDefault__wrapper">
      <label className="InputDefault__label" htmlFor={title}>{title}</label>
      <input
        className="InputDefault__input"
        id={title}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        value={Value}
        {...newProps}
      />
    </div>
  );
}

export default InputDefault;