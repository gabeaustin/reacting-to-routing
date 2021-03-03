import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FilmDetails = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film));
    }, []);

    return (
        <main className="container">
            <section className="row mt-5 mb-5">
                <div className="col-md-3">
                    <button type="button" class="btn btn-default btn-sm">
                        <Link to="/films" className="card-link">Go Back</Link>
                    </button>
                </div>

                <div className="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">{film?.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Title</h6>
                            <hr className="divider"/>

                            <p class="card-text">{film?.description}</p>
                            <h6 class="card-subtitle mb-2 text-muted">Description</h6>

                            <p class="card-text">{film?.director}</p>
                            <h6 class="card-subtitle mb-2 text-muted">Director</h6>

                            <p class="card-text">{film?.producer}</p>
                            <h6 class="card-subtitle mb-2 text-muted">Producer</h6>

                            <p class="card-text">{film?.release_date}</p>
                            <h6 class="card-subtitle mb-2 text-muted">Release Date</h6>

                            <p class="card-text">{film?.rt_score}</p>
                            <h6 class="card-subtitle mb-2 text-muted">Raw Tomato Score</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </section>
        </main>

    );
};

export default FilmDetails;