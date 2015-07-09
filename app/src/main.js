/*import {Components} from './gui-react-components/components.jsx';


React.render(<Components />, document.body);

module.hot.accept();*/




var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var NoteMain = require ('./notes/note-main.jsx');
var Reflux = require ('./reflux/reflux.jsx');
//var Components = require ('./gui-react-components/components.jsx');
import {Components} from './gui-react-components/components.jsx';

var Tutorial = require ('./tutorial/Tutorial.js');
var GuiComboTest = require ('./guicombo/guicombotest.jsx');
var Thinking = require ('./thinking/Thinking.jsx');
var Material = require ('./material/Material.jsx');
var Inbox = require('./Inbox.js');
var Calendar = require('./Calendar.js');
var Dashboard = require('./Dashboard.js');
var Menu = require('./menu/menu.jsx');
var Link = Router.Link;

require("./style/app.scss");
require("./style/main-nav.scss");
require("./style/flexbox.scss");


//require('./style/material.less');

var App = React.createClass({
    render: function () {


        return (
            <div className="fill-all app-container">
             <Menu/>
                <div className="fill-all app">
                    <RouteHandler {...this.props}/>
                </div>
            </div>

        );
    }
});



var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="notes"  handler={NoteMain}/>
        <Route name="reflux"  handler={Reflux}/>
        <Route name="components"  handler={Components}/>
        <Route name="tutorial"  handler={Tutorial}/>
        <Route name="guicombotest"  handler={GuiComboTest}/>
        <Route name="thinking"  handler={Thinking}/>
        <Route name="material"  handler={Material}/>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);



Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});























/*      <Route name="material"  handler={Material}/>*/

//var AppComponent = require('./AppComponent.js');
//React.render(<AppComponent/>, document.body);



/*



 <div className='Grid'>

 <li className="Gird-cell"><Link to="notes">NoteApp</Link></li>
 <li className="Gird-cell"><Link to="tutorial">Tutorial</Link></li>
 <li className="Gird-cell"><Link to="guicombotest">GuiComboTest</Link></li>
 <li className="Gird-cell"><Link to="thinking">Thinking</Link></li>
 <li className="Gird-cell"><Link to="material">Material</Link></li>
 <li className="Gird-cell"><Link to="app">Dashboard</Link></li>
 <li className="Gird-cell"><Link to="inbox">Inbox</Link></li>
 <li className="Gird-cell"><Link to="calendar">Calendar</Link></li>



 {/!* this is the important part *!/}
 <div className='Grid'>
 <RouteHandler {...this.props}/>
 </div>
 </div>*/




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

