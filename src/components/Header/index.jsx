import React from 'react'

function Header() {
  return (
    <div className="Header__wrapper">
      <label className="Header__switch">
        <input type="checkbox" />
        <span className="Header__slider Header__round"></span>
      </label>
    </div>
  )
}

export default Header;