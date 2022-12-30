//metemos el link de la api a consumir en una variable
const API = "https://api.themoviedb.org/3";

//creamos y exportamos una funcion con get que es para consumir y enviar datos y el path es como el argumento prop
export function get(path) {
    //fetch es para consumir la api y usamos el path para usar la api con search o discoveri o la otra
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
                "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}