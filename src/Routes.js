import {Switch} from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home';
import MyProfile from './pages/Users/MyProfile';
import Conquest from './pages/Conquest';
import ObjectiveView from './pages/ObjectiveView';
import About from './pages/About';

export default ()=>{
    return (
        <Switch>
            <RouteHandler private exact path="/">
                <Home/>
            </RouteHandler>

            <RouteHandler private exact path="/my_profile">
                <MyProfile/>
            </RouteHandler>

            <RouteHandler private exact path="/conquests">
                <Conquest/>
            </RouteHandler>

            <RouteHandler private exact path="/objective">
                <ObjectiveView/>
            </RouteHandler>

            <RouteHandler private exact path="/about">
                <About/>
            </RouteHandler>
        </Switch>
    )
}