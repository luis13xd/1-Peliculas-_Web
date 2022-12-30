import { useEffect,useState  } from "react"//importamos para poder usar e usefect y usestate
//importamos el get de nuestra api que esta en la carpeta data para que este se pueda usar en el usseefectsh
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard"

import "../components/ContextMovieCard.css"

export function ContextMovieCard(){
    const [movies,SetMovies] = useState([]); //creamos el use estate iniciado en 0 para despues con el useefect obtener todo lod e movies
    useEffect(() => {
        get("/discover/movie").then((data) => {//concatenamos el get con el path el cual es la palabtra clavede la documentacion de la api
            SetMovies(data.results);
            console.log(data)

        });
    }, []);//los [] es para que se ejecute solo una vez
   
    return(<ul className="container">
            {movies.map((movie)=>(//mapeamos las peliculas y dentro de esto va lo que habiamos importado osea las movie cards y le ponemos en la key el id de la api y en movie va movie ya que son las peliculas de la api
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul> );
}