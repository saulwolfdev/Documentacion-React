import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent= ()=> {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ margin: 1 }} onClick={handleOpen} variant="contained" >Abrir modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titulo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Descripcion
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
          <Button sx={{ marginTop: 1 }} variant="contained" color= 'secondary' onClick={handleClose}>Cerrar Modal</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;