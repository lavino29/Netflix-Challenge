/**
 * Esta validacion se encarga de brindar un experiencia mas fluida
 * ya que al realizar una busqueda quedaban destellos de la busqueda anterior al renderizar 
 * con esta validacion si todavia el estado de peliculas no ha cambiado con el estado del fetch
 * se seguira mostrando el elemento de <Skeleton />
 */
 export const valido = (peliculas, data) =>{
    const id = peliculas.map(element => element?.id)
    const fetchPelicula = data.data?.results.filter(element=> id?.includes(element?.id))
    return id?.length === fetchPelicula?.length
  }