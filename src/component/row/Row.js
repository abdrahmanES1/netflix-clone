import React, { Component } from "react";
import Movie from "../movie/Movie";

class Row extends Component {
   constructor() {
      super();
      this.state = {
         data: {
            backdrop_path: "/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
            genre_ids: [10759, 9648, 18],
            original_language: "ko",
            original_name: "오징어 게임",
            origin_country: ["KR"],
            id: 93405,
            first_air_date: "2021-09-17",
            vote_average: 7.8,
            vote_count: 8336,
            overview:
               "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
            poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            name: "Squid Game",
            popularity: 3372.759,
            media_type: "tv",
         },
      };
   }

   render() {
      return (
         <div className="row">
            <Movie data={this.state.data} />
         </div>
      );
   }
}

export default Row;
