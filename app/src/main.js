import React from 'react/addons';
import Router from 'react-router';
//import * as sa from 'superagent';
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboardddd</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
}

//import Dashboard from './Dashboard.js';
var Dashboard = require('./Dashboard.js');
import Calendar from './Calendar.js';
import Inbox from './Inbox.js';


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});


/*


var React = require('react/addons');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/!* this is the important part *!/}
                <RouteHandler/>
            </div>
        );
    }
});

var Inbox = require('./Inbox.js');
var Calendar = require('./Calendar.js');
//import Dashboard from './Dashboard.js';
var Dashboard = require('./Dashboard.js');


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
*/

//var AppComponent = require('./AppComponent.js');
//React.render(<AppComponent/>, document.body);