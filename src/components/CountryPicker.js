import React, { useState } from 'react'

export default function CountryPicker() {
  const [selectedValue, setSelectedValue] = useState('United States');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="United States">United States</option>
        <option value="Japan">Japan</option>
      </select>
    </div>
  )
}

