import React from 'react'
import countryIcon from "../assets/icons/countryIcon.png"

export default function CountryPicker({country, setter}) {

  const handleChange = (event) => {
    setter(event.target.value);
  }

  return (
    <>
      <div className="leftBorder"></div>
      <div className="picker" data-testid="country-picker">
        <img alt="Calenar icon" className="icon" src={countryIcon}/>
        <div className="innerPicker">
          <label htmlFor = "countryPicker">Country</label>
          <select id ="countryPicker" value={country} onChange={handleChange}>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="ES">Spain</option>
            <option value="FR">France</option>
            <option value="IN">India</option>
            <option value="NO">Norway</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="JP">Japan</option>
          </select>
        </div>
      </div>
    </>
  )
}
