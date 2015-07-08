import React from 'react';


export default class Inbox extends React.Component {
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
            <div className="flex-row flex-wrap fill-all red">
                <div className="flex-item blue">
                    <h1  onClick={this.handleClick}>Inboxxx</h1>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                    <div> hello link </div>
                </div>

                <div  className="flex-item yellow"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>
                <div  className="flex-item"> hello Inbox </div>

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
                <h1  onClick={this.handleClick}>This is Imbox</h1>
                <div> hello too </div>
            </div>
        );
    }
});*/
