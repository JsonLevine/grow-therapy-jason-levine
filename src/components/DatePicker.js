import React, { useState } from "react";
import Picker from "react-datepicker";
import dateIcon from "../assets/icons/dateIcon.png"

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({setter}) {

  // Calculate Yesterday's date to default the datepicker to Yesterday
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [date, setDate] = useState(yesterday);
  setter(date)

  return (
    <div className="picker" data-testid="date-picker">
      <img className="icon" src={dateIcon}/>
      <div className="innerPicker">
        <label htmlFor = "datePicker">Date</label>
        <Picker id ="datePicker" selected={date} onChange={(date) => setDate(date)} />
      </div>
    </div>
  )
}
