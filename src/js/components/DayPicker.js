import React from "react"
import * as Time from "../lib/Time"
import DayPickerInput from "react-day-picker/DayPickerInput"

const FORMAT = "MMM D, YYYY"

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props)
    this.onDayChange = this.onDayChange.bind(this)
  }

  onDayChange(day) {
    if (day) this.props.onDayChange(day)
  }

  render() {
    let {from, to, day} = this.props
    from = Time.fakeZone(from)
    to = Time.fakeZone(to)
    day = Time.fakeZone(day)
    return (
      <div className="text-input-wrapper">
        <DayPickerInput
          ref={r => (this.daypicker = r)}
          value={Time.format(day, FORMAT)}
          formatDate={date => Time.format(date, FORMAT)}
          parseDate={parseDate}
          placeholder={FORMAT}
          onDayChange={this.onDayChange}
          dayPickerProps={{
            selectedDays: [day, {from, to}],
            todayButton: "TODAY",
            modifiers: {from, to}
          }}
          inputProps={{
            size: 11
          }}
        />
      </div>
    )
  }
}

const parseDate = string => {
  const date = Time.parse(string, FORMAT, true)
  return date ? Time.fakeZone(date) : null
}