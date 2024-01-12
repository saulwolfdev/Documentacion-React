import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';

const CardMovie = ({ movie }) => {
  return (
    <Card  sx={{m: 3, maxWidth: 420, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} >
      <CardContent>
        <Typography variant="h5" sx={{m: 1}}>{movie.title}</Typography>
        <Typography sx={{m: 1}}>{movie.synopsis}</Typography>
        <Typography variant="h7" sx={{m: 1}}>Actores: {movie.actors.join(', ')}</Typography>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default CardMovie;