import React, { useState } from "react";
import Picker from "react-datepicker";
import dateIcon from "../assets/icons/dateIcon.png"

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({setter}) {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [date, setDate] = useState(yesterday);
  setter(date)

  return (
    <>
      <img src={dateIcon}/>
      <Picker selected={date} onChange={(date) => setDate(date)} />
    </>
  )
}
