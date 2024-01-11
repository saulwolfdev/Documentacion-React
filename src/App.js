import React from 'react'
import { ThemeProvider } from '@mui/material';
import theme  from './material-ui/theme';
import ButtonComponent  from './material-ui/button';
import CardComponent  from './material-ui/CardComponent';
import SelectComponent from './material-ui/SelectComponent';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent label='button' variant="contained" color="colorCustom" onClick={()=> console.log('click')} />
      <CardComponent />
      <SelectComponent/>
    </ThemeProvider>
  )
}

export default App

