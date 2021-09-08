import React from "react";
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import GoogleMap from "../Google Api/GoogleMap";
import "./router.css"

export default () => {

    return(
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/google_map" component={GoogleMap}/>
            </Switch>
        </BrowserRouter>
    )
}
const Nav = () => {
    return(
        <nav>
            <Link to="/">
                Go Home
            </Link>
        </nav>

    )
}

const Home = () => {
    return(
        <div className="homeContainer">
            <table>
                <tr className="head">
                    <th className="name" >Name</th>
                    <th className="summary" >Summary</th>
                    <th className="recources" >Recources</th>
                </tr>
                <tr>
                    <td><Link to="/google_map">GoogleMap</Link></td>
                    <td>Map configuration with Google Maps api</td>
                    <td>
                        <a href="https://www.npmjs.com/package/@react-google-maps/api">@react-google-maps/api</a> <br/>
                        <a href="https://developers.google.com/maps/documentation/javascript/overview?hl=en">google maps docs (orginal)</a>
                    </td>
                </tr>
            </table>




            <div>
                
            </div>
        </div>
    )
}

