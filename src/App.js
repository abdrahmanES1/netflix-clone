import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Row from "./component/row/Row";

function App() {
   return (
      <Router>
         <div className="App " style={style}>
            <NavBar />
            <Row />
         </div>
      </Router>
   );
}
const style = {
   backgroundColor: "#141414",
   height: "200vh",
   width: "100%",
};

export default App;
