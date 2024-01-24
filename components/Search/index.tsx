import { useState } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import style from './Search.module.scss';

const options = [
  {
    city: '北',
    name: '金山',
    value: 'gin',
  },
  {
    city: '北',
    name: '福隆',
    value: 'fu',
  },
  {
    city: '東北',
    name: '大溪',
    value: 'da',
  },
  {
    city: '東北',
    name: '烏石港',
    value: 'wu',
  },
];

export default function Search() {
  const [location, setLocation] = useState(options[0]);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [timeSlot, setTimeSlot] = useState('am');

  const handleLocationChange = (event: any, value: any) => {
    setLocation(value);
  };
  const handleDateChange = (value: Dayjs | null) => {
    console.log(value);
    setDate(value);
  };
  const handleTimeSlotChange = (event: SelectChangeEvent) => {
    setTimeSlot(event.target.value as string);
  };

  return (
    <div className={style.searchContainer}>
      <Autocomplete
        className={style.searchCondition}
        fullWidth
        value={location}
        onChange={handleLocationChange}
        options={options}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={style.searchCondition}
          value={date}
          onChange={handleDateChange}
          label="Date"
          format="YYYY-MM-DD"
          sx={{ width: '100%' }}
        ></DatePicker>
      </LocalizationProvider>
      <FormControl className={style.searchCondition} fullWidth>
        <InputLabel id="time-slot-label">Time Slot</InputLabel>
        <Select
          labelId="time-slot-label"
          id="time-slot-select"
          value={timeSlot}
          label="Time Slot"
          onChange={handleTimeSlotChange}
        >
          <MenuItem value={'am'}>早上</MenuItem>
          <MenuItem value={'PM'}>下午</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" size="large" color='primary' className={style.searchBtn}>
        Search
      </Button>
    </div>
  );
}
