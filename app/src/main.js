/*
import React from 'react/addons';
import Router from 'react-router';
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
                        <li><Link to="tutorial">Tutorial</Link></li>
                        <li><Link to="app">Dashboardddd</Link></li>
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
}

//import Dashboard from './Dashboard.js';
var Dashboard = require('./Dashboard.js');
import Calendar from './Calendar.js';
import Inbox from './Inbox.js';
var Tutorial = require ('./tutorial/CommentBox.js');


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="tutorial" handler={Tutorial}/>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

*/


//var React = require('react/addons');
//var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;




var Tutorial = require ('./tutorial/Tutorial.js');
var Inbox = require('./Inbox.js');
var Calendar = require('./Calendar.js');
var Dashboard = require('./Dashboard.js');



/*
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

*/


/*

var TutorialWrapper = React.createClass({
    render: function () {
        return (
            <Tutorial data={data} />
        );
    }
});

*/




var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="tutorial">Tutorial</Link></li>
                        <li><Link to="app">Dashboardddd</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler {...this.props}/>
            </div>
        );
    }
});



var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="tutorial"  handler={Tutorial}/>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

/*
Router.run (routes,(Handler,state)=>{
    React.render(<Handler/>,document.body);
});
*/


Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});



//var AppComponent = require('./AppComponent.js');
//React.render(<AppComponent/>, document.body);