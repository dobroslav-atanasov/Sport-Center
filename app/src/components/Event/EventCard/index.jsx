import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ id, name, location, description, imageUrl, town, date, participants }) => {
    return (
        <div className="col-md" style={{ marginBottom: 30 }}>
            <div className="card" style={{ width: 350 }}>
                <img className="card-img-top" src={imageUrl} alt={town} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Town:</b> {town}</li>
                    <li className="list-group-item"><b>Location:</b> {location}</li>
                    <li className="list-group-item"><b>Date:</b> {new Date(date).getDate()}-{new Date(date).getMonth() + 1}-{new Date(date).getFullYear()}</li>
                    <li className="list-group-item"><b>Time:</b> {new Date(date).getHours()}:{new Date(date).getMinutes()}</li>
                    <li className="list-group-item"><b>Participants:</b> {participants}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/event/${id}`}>
                        <button className="btn btn-success">
                            Event Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;