import {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia, styled } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 350,
  border: 'none',
  backgroundColor: '#222730',
  boxShadow: 24,
  p: 4,
};

export const ModalCard = ({pelicula = {}, handleClose, open})=> {
    const [openModal, setOpen] = useState(open);
    const TextoCard = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary?.textoPrimario,
        fontSize: "0.8rem",
      }));
    
  return (
    
      <Modal
        open={openModal}
        onClose={()=>handleClose(setOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
          component="img"
          image={pelicula?.image}
          alt={pelicula.title}
          sx={{
            height: "250px",
            width: "100%",
            position: "relative",
            borderRadius: '3px'
          }}
        />
          <TextoCard id="modal-modal-description" sx={{ mt: 2 }}>
            {pelicula?.title}
          </TextoCard>
          <TextoCard id="modal-modal-description" sx={{ mt: 2 }}>
            {pelicula?.description}
          </TextoCard>
          <Box sx={{width: '100%', display:'flex', justifyContent: 'center'}}>
          <Button color='other' variant="contained" onClick={()=>handleClose(setOpen)}>Salir</Button>
          </Box>
          
        </Box>
      </Modal>
  
  );
}
ModalCard.propTypes = {
  pelicula: PropTypes.object,
  handleClose: PropTypes.func,
  open: PropTypes.bool
};