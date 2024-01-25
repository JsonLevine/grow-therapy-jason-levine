import React from "react";
import Picker from "react-datepicker";
import dateIcon from "../assets/icons/dateIcon.png"

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({value, setter}) {
  return (
    <div className="picker desktop-3 tablet-3 mobile-12" data-testid="date-picker">
      <img alt="Date icon" className="icon" src={dateIcon}/>
      <div className="innerPicker">
        <label htmlFor = "datePicker">Date</label>
        <Picker id ="datePicker" selected={value} onChange={(date) => setter(date)} />
      </div>
    </div>
  )
}
