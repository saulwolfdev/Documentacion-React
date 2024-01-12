import React from 'react';
import { Typography } from '@mui/material';
import { MockData } from './MockData';
import CardMovie from './CardMovies';

const MyComponent = () => {
  const movies = MockData();

  return (
    <div>
      <Typography variant="h4" sx={{m: 3}}>Películas</Typography>
      {movies.map((movie, index) => (
        <CardMovie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MyComponent;