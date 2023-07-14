import { styled } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from "@mui/material";
import { Skin } from "../utils/Types";
import { useState } from 'react';

const Img = styled('img')({
    margin: '0',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


interface SkinCardProps {
   skin: Skin;
}

const SkinCard: React.FC<SkinCardProps> = ({ skin }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        console.log('Se intenta cerrar')
        setOpen(false);
        };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  

  return (
      <Paper
          elevation={isHovered ? 10 : 4}
          sx={{ cursor: 'pointer', p: '2rem', display: 'flex', flexDirection: 'row', backgroundColor: 'grey', minWidth: '400px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClickOpen}
      >
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {skin.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Acá irá toda la información de la skin
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Volver a la galería</Button>
            <a href={`https://wa.me/5491162961743?text=Me%20gustaría%20comprar%20la%20skin%20ID:%20${skin.id}`} target="_blank" rel="noreferrer">
                <Button variant='contained' sx={{ mt: 3 }} onClick={handleClose}>Comprar ahora</Button>
            </a>
          </DialogActions>
        </Dialog>
          <Img src={skin.img} sx={{marginX:'2rem'}} width={'200px'} />
          <Box sx={{display:'flex', flexDirection:'column', flex:1}}>
            <Typography fontWeight={600} variant='h5' mt={1}>${skin.price}</Typography>
            <Typography mt={1}>{skin.title}</Typography>
            
          </Box>
      </Paper>
  );
}

export default SkinCard;
