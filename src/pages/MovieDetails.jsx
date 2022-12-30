import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"//se usa para obtener datos de la api
import { get } from "../data/httpClient"//impostamos el get que nos lleva a la info de la api
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails() {
    //vamos a obtnenr datos de la api a travez del hook useparam, en este caso vamos a obtener el movieid que fue el mismo que psuimos en la ruta 
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0])
            console.log(data)
            console.log(data.genres[0])
        });
    }, [movieId])
    const imageUrl = getMovieImg(movie.poster_path, 500)

    return (
        <div className="detailContainer">
            <img
                src={imageUrl}
                className="movieImage col"
                alt={movie.title}
            />
            <div className="movieDetails col">
                <p className="title">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Genero: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripción: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>)
    }