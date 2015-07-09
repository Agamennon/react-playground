import React from 'react';
import * as sa from 'superagent';


export default class Calendar extends React.Component {
    handleClick () {
        var x = 27;
        var y = 400 ;
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
                <h1  onClick={this.handleClick}>Calendkreeeeeeee</h1>
                <div> hello Calendaeeeeer </div>
            </div>
        );
    }

}


/*


var React = require('react');
module.exports = React.createClass({

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
                <h1  onClick={this.handleClick}>This is Calendarrr</h1>
                <div> hello too </div>
            </div>
        );
    }
});*/
