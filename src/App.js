// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { Button, ThemeProvider, createTheme } from '@mui/material';
import theme  from './material-ui/theme';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        hola       
      </div>
      <Button 
      variant='contained' 
      color='success'
      onClick={()=>{alert('click')}}
      >
        button
      </Button>
    </ThemeProvider>
  )
}

export default App

