import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css"; 

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast || []); 
      } catch (error) {
        console.log("Error fetching movie cast:", error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id} className={s.actor}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300"
                }
                alt={actor.name}
                className={s.actorImg}
              />
              <div>
                <h4>{actor.name}</h4>
                <p>Role: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
