// Importar os Hoocks do React
import { useState, useEffect } from "react";
import MovieCard from "../componets/MovieCard";

import './MoviesGrid.css'

// Criar duas constantes (chave da API e URL da API).
const moviesURL = import.meta.env.VITE_API;  //importando API que está no arquivo (.env)
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);  // Gerenciar estado dos filmes

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedurl = `${moviesURL}top_rated?${apikey}`;
        console.log(topRatedurl);
        getTopRatedMovies(topRatedurl);
    }, []);

    console.log(topMovies);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home;