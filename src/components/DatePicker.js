import React, { useState } from "react";
import { DatePicker as Picker } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Picker selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}
