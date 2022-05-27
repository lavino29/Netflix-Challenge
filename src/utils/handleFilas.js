export const filas = (peliculas) =>{
    const longitud = peliculas.length
    if(longitud < 15) {
        return peliculas
    }else{
        return [...peliculas.slice(0,15)]
    }
   
}