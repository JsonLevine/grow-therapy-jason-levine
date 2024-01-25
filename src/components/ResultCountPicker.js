import React from 'react'
import menuIcon from "../assets/icons/menuIcon.png"

export default function ResultCountPicker({count, setter}) {
  return (
    <>
      <div className="leftBorder"></div>
      <div className="picker" data-testid="result-count-picker">
        <img alt="List icon" className="icon" src={menuIcon} />
        <div className="innerPicker">
            <label htmlFor = "resultSelect">Num Results</label>
          <select data-testid="result-select" id="resultSelect" value={count} onChange={setter}>
            <option value="27">25</option>
            <option value="52">50</option>
            <option value="77">75</option>
            <option value="102">100</option>
            <option value="202">200</option>
          </select>
        </div>
      </div>
    </>
  )
}
