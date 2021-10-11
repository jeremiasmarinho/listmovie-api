import { Route } from "react-router";
import { Favorites } from "./Views/Favorites";
import { Home } from "./Views/Home";
import { MovieDetail } from "./Views/MovieDetail";

export const ApplicationRoutes = () => (
    <>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie/:id" component={MovieDetail}></Route>
        <Route exact path="/favorites" component={Favorites}></Route>

    </>
);
