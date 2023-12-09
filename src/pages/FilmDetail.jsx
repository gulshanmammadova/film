import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blueviolet",
};
const FilmDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails =  () => {

       fetch(`https://www.omdbapi.com/?i=${id}&apikey=6be6c7a0`).then(res=>res.json())
       .then(data=>{ 
          setMovie(data);
        
          setLoading(false)
        }
       )
 
    
    };

    fetchMovieDetails();
  }, [id]);
  if (!movie) {
    return <div className='White sweet-loading'>
  <MoonLoader
        color='blueviolet'
        loading={loading}
        cssOverride={override}
        size={30}
        margin-top={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>;
  }
  return (
    <div>
     
      {
         <div>
       
       <div className=" text-start detail-card">
         <img className="card-img-top" src={movie.Poster} alt="Title"/>
         <div className="card-body">
           <h4 className="card-title first">Title : {movie.Title}</h4>
           <p className="card-text">Director : {movie.Director}</p>
           <p className="card-text">Year : {movie.Year}</p>
           <p className="card-text x">IMDB : {movie.imdbRating}</p>
     <Link className='btn-primary-add detail z' to={`https://www.imdb.com/title/${id}`}> Go To Detail</Link>
        
         </div>
       </div>
       </div>
      }
      
      
     </div>
  )
}

export default FilmDetail