import React from 'react';

function ButtonDefault({ text, action }) {
  return ( 
    <button className="BtnDefault" onClick={() => action()}>
      {text}
    </button>
  )
}

export default ButtonDefault;