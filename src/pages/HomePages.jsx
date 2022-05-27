import { useState, useEffect } from "react";
import { Feed } from "./components/Feed";
import { NavBar } from "./components/NavBar";
import { pelicula } from "../assets/peliculas";
import { Box, styled } from "@mui/material";
import { ApiRequest } from "../hook/apiRequest";
export const HomePages = () => {
  // variable de entorno, por fines practico lo dejo publico. 
  const url = "https://imdb-api.com/API/Search/k_c3fetq90";
  const BoxPadre = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  }));
  const [peliculas, setPeliculas] = useState(pelicula);
  const [busqueda, setBusqueda] = useState("cars");
  const urlPrueba = busqueda === "cars" ? "" : url;
  const data = ApiRequest(urlPrueba);

  useEffect(() => {
    if (
      busqueda.length > 1 &&
      !data?.error &&
      Array.isArray(data.data?.results)
    ) {
       setPeliculas(data.data?.results)
    }
  }, [data, busqueda]);
  // al ser un api con peticiones limitada solo se buscara luego de que el usuario de enter o pierda el foco 
  const handleSubmit = (e) => {
    if (e.code === "Enter" || e.type === "blur" && e.target.value?.length > 1) {
      setBusqueda(e.target.value);
    }
  };
  return (
    <BoxPadre>
      <NavBar handleSubmit={handleSubmit} />
      <Feed data={data} peliculas={peliculas} busqueda={busqueda} />
    </BoxPadre>
  );
};
