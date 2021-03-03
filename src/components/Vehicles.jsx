import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
            .then(response => response.json())
            .then(vehicles => setVehicles(vehicles));
    }, []);

    return (
        <main className="container">
            <section className="row mt-5 mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1 className="text-center">Vehicles</h1>

                    <ul className="list-group">
                        {vehicles.map(vehicle => (
                            <li 
                            key={`user-item-${vehicles.id}`}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {vehicles.name}
                                
                                <Link 
                                    to={`/vehicles/${vehicle.id}`} 
                                    className="btn btn-primary">See Vehicle Details
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-3"></div>
            </section>
        </main>
    );
};

export default Vehicles;