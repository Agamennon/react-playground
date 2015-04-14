/*
import React from 'react';
import * as sa from 'superagent';

export default class Dashboard extends React.Component {
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
                <h1  onClick={this.handleClick}>Dashboarddddddd</h1>
                <div> hello too </div>
            </div>
        );
    }

}
*/



var React = require('react');
//var sa = require('superagent');
module.exports = React.createClass({

    handleClick:function() {
     /*   sa.get('/teste').end(function(err,res){
          alert(err||res.text);
          console.log(err||res.text);
        });*/

        sa.get('/getAllTutorial').end(function(err,res){
            alert(err||res.text);
            console.log(res.body);
            //alert(err||res.text);

        });

        var x = 27;
        var y = 400 ;
        var z = x + y;
        console.log(z);
    },


    render: function () {
        var sty = {color : 'red'};
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1 style={sty} onClick={this.handleClick}>Dashboard</h1>
                <div> hello too </div>
            </div>
        );
    }
});
