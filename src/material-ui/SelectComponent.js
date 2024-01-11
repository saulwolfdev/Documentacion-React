import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectComponent= ()=> {
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {    setAmount(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 110, margin: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="deo-simple-select-label">Cantidad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          label="Cantidad"
          onChange={handleChange}
        >
          <MenuItem value={1}>Uno</MenuItem>
          <MenuItem value={2}>Dos</MenuItem>
          <MenuItem value={3}>Tres</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectComponent