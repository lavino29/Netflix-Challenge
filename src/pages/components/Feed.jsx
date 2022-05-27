import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from "@mui/material"
import { filas } from "../../utils/handleFilas"
import { CardContenedor } from "./Card"
import { valido } from '../../utils/valido';

export const Feed = ({ data, peliculas, busqueda }) => {
  /**
   * Manejador de filas: 5 item por fila
   * consigna: 1 a 3 filas mostrando los thumbnails de los resultados.
   * En dispositivos moviles sera superior a 3 filas -> no se específica hacer un carrusel el cual mejoraria la experiencia
   */
  const pelicula = filas(peliculas);
  // valido(peliculas, data) verifica realmente el cambia de la data y no solo del loading 
  return data?.loading && valido(peliculas, data) ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        margin: "15px",
      }}
    >
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Box>
  ) : (
    <Box
      sx={{
        width: "95%",
        height: "100%",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <Typography sx={{ color: "gray", margin: "15px 0 " }}>
        Explorar titulos relacionados con: {<Typography sx={{cursor: 'pointer', color: '#fff'}} variant='span'>{busqueda}</Typography>}{" "}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            md: "space-between",
            lg: "flex-start",
          },
        }}
      >
        {pelicula.map((element) => (
          <CardContenedor key={element?.id} pelicula={element} />
        ))}
      </Box>
    </Box>
  );
};
Feed.propTypes = {
  peliculas: PropTypes.array,
};