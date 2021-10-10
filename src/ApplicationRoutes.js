import { Route } from "react-router";
import { Home } from "./Views/Home";
import { MovieDatail } from "./Views/MovieDetail";

export const ApplicationRoutes = () => (
<> 
 <Route exact path="/" component={Home}></Route>
 <Route exact path="/movie/:id" component={MovieDatail}></Route>
</>

)