import React from 'react';
import menuIcon from "../assets/icons/menuIcon.png"

export default function ResultCountPicker({count, setter}) {
  return (
    <>
      <div className="leftBorder"></div>
      <div className="picker desktop-3 tablet-3 mobile-12 custom-select" data-testid="result-count-picker">
        <img alt="List icon" className="icon" src={menuIcon} />
        <div className="innerPicker">
            <label htmlFor = "resultSelect">Num Results</label>
          <select 
            data-testid="result-select" 
            id="resultSelect" 
            value={count} 
            onChange={setter}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>
      </div>
    </>
  )
}
