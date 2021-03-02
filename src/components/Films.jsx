import React from "react";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Films = () => {
    // const { allFilms } = useParams();
    const [films, setFilms] = useState([]);

    // const { filmid } = useParams();
    // const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => setFilms(films));
        // .then(allFilms => console.log(allFilms))
    }, []);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-center">Films</h1>
                </div>

                <ul className="list-group">
                    {films.map(film => (
                        <li key={`user-item-${film.id}`}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            {film.title}
                            <Link to={`/films/${film.id}`} className="btn btn-primary">See Film Info</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Films;