//importamos primero para nuestras rutas el react router dom y lo instalamos con npm o yarn y ponemos esl impor que es este
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//luego importamos nuestra landingpage que en este caso va a ser landing page que esta en pages
import {LandingPage} from "../pages/LandingPage"
//importamos la otra pagina que es la de los detalles de las peliculas
import { MovieDetails } from "../pages/MovieDetails";
//creamos la funcion donde el nombre no puede ser igula al del import de la 1ra linea
export function MyRoutes(){
    return(<Router>
        <Routes>
            {/* Route es nuestra ruta principal o agina principal la cual debe tener ese
            exact por defecto y el path que es para redireccionar y la pagina que cargara de primero 
            que estaria en element y seria la landing page */}
            <Route exact path="/" element={<LandingPage />} />
            {/* aca pondremos la pagina de los detalless */}
            <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
        
    </Router>);
}