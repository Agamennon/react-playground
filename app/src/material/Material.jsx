//require("../style/app.less");

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//require('!css!less!material-ui/src/less/scaffolding.less');
//require('!css!less!material-ui/src/less/components.less');

//require('../style/material.less');

var MaterialMain = require('./MaterialMain.jsx');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;

var Material = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
    //    require('../style/material.less');

        return (
            <MaterialMain   />
        );
    }
});

module.exports = Material;