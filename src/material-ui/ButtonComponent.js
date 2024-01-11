import React from 'react'
import { Button } from '@mui/material';

const ButtonComponent = ({variant, color, onClick, disable, label}) => {
  return (
    <Button 
      variant={variant}
      color={color}
      onClick={onClick}
      disable={disable}
      sx={{margin: 2}}
      >
       {label}
      </Button>
  )
}

export default ButtonComponent
