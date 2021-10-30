import React from "react";
import { IMG_URL } from "../../request";

const Movie = ({ data }) => {
   return (
      <div className="card mt-5 mx-2" key={data.id}>
         <img
            src={`${IMG_URL}${data.poster_path}`}
            className="card-img-top"
            alt="Movie Title"
         />

         <div className="card-body text-center fw-lighter pb-0 px-1 text-white fw-bold">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text  lh-sm mb-0 text-muted">{data.overview}</p>
            <span className="fw-bold  float-end text-success ">
               {data.vote_average}
            </span>
         </div>
      </div>
   );
};

export default Movie;
