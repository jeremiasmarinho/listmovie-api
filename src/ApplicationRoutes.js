import { Route } from "react-router";
import { Home } from "./Views/Home";

export const ApplicationRoutes = () => (
<> 
 <Route exact path="/" component={Home}></Route>
</>

)