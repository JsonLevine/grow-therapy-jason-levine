import React, { useState } from "react";
import Picker from "react-datepicker";
import dateIcon from "../assets/icons/dateIcon.png"

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <img src={dateIcon}/>
      <Picker selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  )
}
