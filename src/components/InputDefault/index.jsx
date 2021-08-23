import React from 'react';

function InputDefault({title, type, placeholder}) {
  return (
    <div className="InputDefault__wrapper">
      <label className="InputDefault__label" htmlFor={title}>{title}</label>
      <input
        className="InputDefault__input"
        id={title}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
      />
    </div>
  );
}

export default InputDefault;