import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import FenceIcon from '@mui/icons-material/Fence';

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
  maxWidth:'100%',
  minWidth:'20%'
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container justifyContent="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Titulo
          </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <Button sx={{ mr: 1}} variant="contained" startIcon={<DoorBackIcon/>}></Button>
            <Button sx={{ mr: 1}} variant="contained" startIcon={<FenceIcon  />}></Button>
            <Button variant="contained" startIcon={<CameraAltIcon  />} ></Button>
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button sx={{ mr: 1}} variant="contained">Puerta</Button>
            <Button sx={{ mr: 1}} variant="contained">Reja</Button>
            <Button variant="contained">Camara </Button>
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button sx={{ mr: 1}} variant="contained">Agregar</Button>
            <Button sx={{ mr: 1}} variant="contained">Editar</Button>
            <Button variant="contained">Eliminar</Button>
            </Typography>
          </Grid>
          
          <Grid container justifyContent="end"  >
            <Button onClose={handleClose} sx={{ mt: 3}} variant="contained">Close</Button>
          </Grid>
        </Box>  
      </Modal>
    </div>
  );
}