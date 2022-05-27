import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
import { ModalCard } from "./Modal";

export const CardContenedor = ({ pelicula = {} }) => {
  // controla cuando se debe mostrar el elemento oculto al mouse pasar por arriba de la imagen 
  const [hover, setHover] = useState(false);
  // controla el modal -> este modal se le envias unas props "peliculas"
  const [open, setOpen] = useState(false);
  // controla el tamaño de la imagen, papara calcular el elemento oculto sea un poco mas pequeño y de la impresion de que esta por debajo
  const imageRef = useRef(null);
  const TextoCard = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary?.textoPrimario,
    fontSize: "0.7rem",
  }));
  const CardContentPadre = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary?.main,
    width: "100%",
    height: "100%",
    margin: "5px 5px",
    position: "relative",
    margin: 0,
  }));
  const handleClose = (setModal) => {
    setModal(false);
    setOpen(false);
    /**
     * setTimeout Reinicia el estado del modal, esta hecho de esta manera para no cargar mas este componente
     *  y tener el modal de forma interna -> El modal se puede reutilizar
     */
    setTimeout(() => {
      setOpen(false);
      setModal(true);
    }, 100);
  };
  /**
   * los eventos de mouse manejan cuando pasa el mouse por arriba del elemento y cuando sale.
   */
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setOpen(true);
        setHover(false);
      }}
      sx={{
        margin: "5px",
        width: { xs: "165px", sm: "175px", md: "200px", lg: "230px" },
        height: "100%",
        position: "relative",
        "&:hover": { transform: "scale(1.3)", zIndex: "10" },
        transition: "0.5s all ease",
      }}
    >
      <CardContentPadre>
        <CardMedia
          ref={imageRef}
          component="img"
          image={pelicula?.image}
          alt={pelicula.title}
          sx={{
            height: "125px",
            width: { xs: "165px", sm: "175px", md: "200px", lg: "230px" },
            position: "relative",
            "&:hover": { zIndex: "10" },
          }}
        />
      </CardContentPadre>
      {hover && (
        <CardContentPadre
          sx={{
            margin: 0,
            paddingLeft: "3px",
            height: "55px",
            position: "absolute",
            zIndex: "9",
            backgroundColor: "#222730",
            bottom: "-52px",
            width: `${imageRef.current?.clientWidth - 3}px`,
          }}
        >
          <TextoCard gutterBottom variant="h5" component="span">
            {pelicula.title}
          </TextoCard>
          <TextoCard variant="body2" color="text.secondary">
            {pelicula.description}
          </TextoCard>
        </CardContentPadre>
      )}
      {open && (
        <ModalCard pelicula={pelicula} handleClose={handleClose} open={open} />
      )}
    </Box>
  );
};
CardContenedor.propTypes = {
  pelicula: PropTypes.object
};