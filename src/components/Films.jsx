import React, { useState } from "react";
import { useEffect } from "react";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(allFilms => console.log(allFilms))
    }, []);

    return(
        <main className="container">
        <section className="row mt-3">
            <div className="col-12">
                <h1 className="text-center">Films</h1>
                {films.map(film => {
                    <div className="col-md-6" key={film.id}></div>
                })}
            </div>
        </section>
    </main>
    );
};

export default Films;