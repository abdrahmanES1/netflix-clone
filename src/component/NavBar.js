import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = (props) => {
   const onchangehandler = (e) => {
      e.preventDefault();
      // this.props.getSearchValue(e.target.value);
   };

   return (
      <Router>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-3">
               <Link className="navbar-brand" to="/">
                  <div className="fw-bold text-danger display-5">Netflix</div>
               </Link>
               <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-secondary text-sm-center">
                     <li className="nav-item">
                        <Link
                           to="/"
                           className="nav-link active "
                           aria-current="page"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link
                           to="/Trending"
                           className="nav-link active"
                           aria-current="page"
                        >
                           New & Popular
                        </Link>
                     </li>
                  </ul>
                  <form
                     className="d-lg-flex justify-content-center d-none"
                     onSubmit={onchangehandler}
                  >
                     <input
                        className="form-control me-2 border-1 border-secondary"
                        type="search"
                        placeholder="Movies"
                        aria-label="Search"
                     />
                     <button className="btn btn-danger btn-sm text-center pt-0">
                        search
                     </button>
                  </form>
               </div>
            </div>
         </nav>
      </Router>
   );
};

export default NavBar;
