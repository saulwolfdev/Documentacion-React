import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedValue(inputValue);
  };

  return (
    <div style={{ margin: '16px' }}>
      <form className="simple-form" onSubmit={handleSubmit}>
        <TextField
          id="nameInput"
          label="Nombre"
          variant="standard"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          <Button sx={{ marginTop: 2 }} type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </div>
      </form>
      {submitted && (
        <Card sx={{ marginTop: 2, maxWidth: 275, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Valor enviado:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {submittedValue}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SimpleForm;
