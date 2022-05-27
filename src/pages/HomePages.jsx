import { useState, useEffect } from "react";
import { Feed } from "./components/Feed";
import { NavBar } from "./components/NavBar";
import { pelicula } from "../assets/peliculas";
import { Alert, Box, Snackbar, Stack, styled } from "@mui/material";
import { ApiRequest } from "../hook/apiRequest";
export const HomePages = () => {
  const BoxPadre = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  }));

  // variable de entorno, por fines practico lo dejo publico.
  const url = "https://imdb-api.com/API/Search/k_c3fetq90";
  // controla el cartel de error
  const [open, setOpen] = useState(false);
  // los estados estan previamente inicializados para no consumir la api
  const [peliculas, setPeliculas] = useState(pelicula);
  const [busqueda, setBusqueda] = useState("cars");
  const urlPrueba = busqueda === "cars" ? "" : url;
  // hoock que controla las peticiones
  const data = ApiRequest(urlPrueba, busqueda);
  // cierra el carter del error
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (
      busqueda.length > 1 &&
      !data?.error &&
      Array.isArray(data.data?.results) &&
      data.data?.results.length > 0
    ) {
      setPeliculas(data.data?.results);
    } else if( busqueda !=='cars' ) {
      setOpen(true);
    }
  }, [data, busqueda]);
  // al ser un api con peticiones limitada solo se buscara luego de que el usuario de enter o pierda el foco
  const handleSubmit = (e) => {
    if (
      e.code === "Enter" ||
      (e.type === "blur" && e.target.value?.length > 1)
    ) {
      setBusqueda(e.target.value);
    }
  };
  return (
    <BoxPadre>
      <NavBar handleSubmit={handleSubmit} />
      <Feed data={data} peliculas={peliculas} busqueda={busqueda} />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Hubo un error al buscar.
          </Alert>
        </Snackbar>
      </Stack>
    </BoxPadre>
  );
};
