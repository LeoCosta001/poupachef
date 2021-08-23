import React from 'react';

function ButtonDefault({ link, text, action }) {
  return ( 
    <a href={link} className="BtnDefault" onClick={() => action}>
      {text}
    </a>
  )
}

export default ButtonDefault;