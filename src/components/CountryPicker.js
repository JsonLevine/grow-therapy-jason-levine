import React, { useState } from 'react'
import countryIcon from "../assets/icons/countryIcon.png"

export default function CountryPicker() {
  const [selectedValue, setSelectedValue] = useState('United States');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <div className="leftBorder"></div>
      <div className="picker">
        <img className="icon" src={countryIcon}/>
        <div className="innerPicker">
          <label htmlFor = "countryPicker">Country</label>
          <select id ="countryPicker" value={selectedValue} onChange={handleChange}>
            <option value="United States">United States</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
      </div>
    </>
  )
}

