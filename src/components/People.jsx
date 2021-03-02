import React, { useState } from "react";
import { useEffect } from "react";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(response => response.json())
        .then(allPeople => console.log(allPeople))
    }, []);

    return (
        <main className="container">
        <section className="row mt-3">
            <div className="col-12">
                <h1 className="text-center">People</h1>
            </div>
        </section>
    </main>
    );
};

export default People;