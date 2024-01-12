import React from 'react'
import { ThemeProvider } from '@mui/material';
import theme  from './material-ui/theme';
import ButtonComponent  from './material-ui/ButtonComponent';
import CardComponent  from './material-ui/CardComponent';
import SelectComponent from './material-ui/SelectComponent';
import TabsComponent from './material-ui/TabsComponent';
import ModalComponent from './material-ui/ModalComponent';
import SimpleForm from './SimpleForm';
import ComplexForm from './ComplexForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <ButtonComponent label='button' variant="contained" color="colorCustom" onClick={()=> console.log('click')} />
      <CardComponent />
      <SelectComponent/>
      <TabsComponent />
      <ModalComponent />
      <SimpleForm /> */}
      <ComplexForm />
    </ThemeProvider>
  )
}

export default App

