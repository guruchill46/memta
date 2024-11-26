import { useState } from "react"
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import {Icon} from "@iconify/react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const years = Array.from({ length: 100 }, (_, i) => dayjs().year() - 50 + i)

const CalendarHeader = ({ currentMonth, onMonthChange, onYearChange }) => {
  const handleMonthChange = event => {
    const month = event.target.value
    onMonthChange(dayjs(currentMonth).month(month))
  }

  const handleYearChange = event => {
    const year = event.target.value
    onYearChange(dayjs(currentMonth).year(year))
  }

  return (
    <Stack pb={1} spacing={2} justifyContent="center">
      <FormControl
        variant="filled"
        sx={{
          "& .MuiInputBase-root": {
            "&:focus-within": {
              borderColor: "transparent !important",
              boxShadow: "none"
            }
          }
        }}
      >
        <Select
          value={currentMonth.month()}
          onChange={handleMonthChange}
          IconComponent={() => (
            <Icon
              icon="ic:round-keyboard-arrow-down"
              fontSize="h3.fontSize"
            />
          )}
          sx={theme => ({
            "&.MuiInputBase-root": {
              bgcolor: `${theme.palette.info.main} !important`,
              "& .MuiBox-root": {
                color: "primary.main"
              }
            },
            "& .MuiSelect-select": {
              color: `${theme.palette.primary.main} !important`
            }
          })}
        >
          {months.map((month, index) => (
            <MenuItem key={index} value={index}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          "& .MuiInputBase-root": {
            bgcolor: "transparent !important",
            "&:focus-within": {
              borderColor: "transparent !important",
              boxShadow: "none"
            }
          }
        }}
      >
        <Select
          value={currentMonth.year()}
          onChange={handleYearChange}
          sx={theme => ({
            "& .MuiSelect-select": {
              color: `${theme.palette.text.primary} !important`
            }
          })}
          IconComponent={() => (
            <Icon
              icon="ic:round-keyboard-arrow-down"
              fontSize="h3.fontSize"
            />
          )}
        >
          {years.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs())

  const handleMonthChange = month => {
    setCurrentDate(month)
  }

  const handleYearChange = year => {
    setCurrentDate(year)
  }

  return (
    <Paper sx={{ p: 2, height: 350 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ width: 1 }}
          slots={{
            calendarHeader: props => (
              <CalendarHeader
                currentMonth={props.currentMonth}
                onMonthChange={handleMonthChange}
                onYearChange={handleYearChange}
              />
            )
          }}
          dayOfWeekFormatter={date => {
            const dayMap = {
              Su: "Su",
              Mo: "Mo",
              Tu: "Tu",
              We: "We",
              Th: "Th",
              Fr: "Fr",
              Sa: "St"
            }
            return dayMap[date.format("dd")] || date.format("dd")
          }}
          value={currentDate}
          onChange={date => setCurrentDate(date)}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
        />
      </LocalizationProvider>
    </Paper>
  )
}

export default Calendar;
