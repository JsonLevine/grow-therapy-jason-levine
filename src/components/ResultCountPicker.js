import React, { useState } from 'react'
import menuIcon from "../assets/icons/menuIcon.png"

export default function ResultCountPicker({setter}) {
  const [selectedValue, setSelectedValue] = useState('100');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }
  setter(selectedValue)
  
  return (
    <div>
      <img src={menuIcon} />
      <select value={selectedValue} onChange={handleChange}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>
  )
}
