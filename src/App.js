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
import { ThemeProvider } from '@mui/material';
import theme  from './material-ui/theme';
import ButtonComponent  from './material-ui/button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent label='button' variant="contained" color="colorCustom"  />

    </ThemeProvider>
  )
}

export default App

