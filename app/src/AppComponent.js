

var React = require('react');
var AppComponent = React.createClass({

    handleClick:function() {
        var x = 27;
        var y = 40 ;
        var z = x + y;
        console.log(z);
    },


    render: function () {
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
            <h1  onClick={this.handleClick}>This is Compondsssss</h1>
            <div> hello tosadasdasdao </div>
            </div>
        );
    }
});

React.render(<AppComponent/>, document.body);


/*
 import React from 'react';
 import * as sa from 'superagent';

 export default class AppComponent extends React.Component {
 handleClick () {
 var x = 27;
 var y = 40 ;
 var z = x + y;
 console.log(z);
 }

 render () {
 var x = 66;
 var y = 90 ;
 var z = x + y;
 console.log(z);
 return (
 <div>
 <h1  onClick={this.handleClick}>App Component</h1>
 <div> hello App component </div>
 </div>
 );
 }

 }

 */


