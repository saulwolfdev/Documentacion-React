import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmissions([...formSubmissions, formData]);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="complex-form-container">
      <form onSubmit={handleSubmit} className="complex-form">
        <div>
            <TextField
            id="nameInput"
            label="Nombre"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            sx={{margin: 2}}
            />
        </div>
        <div>
            <TextField
            id="emailInput"
            label="Correo Electrónico"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            sx={{margin: 2}}
            />
        </div>
        <div>
            <TextField
            id="passwordInput"
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            sx={{margin: 2}}
            />
        </div>
        <Button type="submit" variant="contained" color="primary" sx={{margin: 2, left: 133}}>
          Enviar
        </Button>
      </form>
      <div style={{margin: '16px'}}>
        <h2>Historial de Envíos</h2>
        {formSubmissions.map((submission, index) => (
          <Card key={index} sx={{ marginTop: 2, maxWidth: 380, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Envío {index + 1}:
              </Typography>
              <ul>
                {Object.entries(submission).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComplexForm;
