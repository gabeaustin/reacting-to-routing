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
            <section className="row mt-3">
                <div className="col-12">
                    <h4 className="text-center">Film Details for</h4>
                    <h1 className="text-center">Title: {film?.title}</h1>

                    <h3 className="text-center">Description: {film?.description}</h3>
                    <h3 className="text-center">Director: {film?.director}</h3>
                    <h3 className="text-center">Producer: {film?.Producer}</h3>
                    <h3 className="text-center">Release Date: {film?.release_date}</h3>
                    <h3 className="text-center">Raw Tomato Score: {film?.rt_score}</h3>
                    {/* <Link to={`/films/${filmid}`} className="btn btn-primary">See Film Details below</Link> */}


                    <Link to="/films" className="btn btn-secondary">Go Back</Link>

                </div>
            </section>
        </main>

    );
};

export default FilmDetails;