
var mui = require('material-ui');
var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;
var RaisedButton = mui.RaisedButton;


var MaterialMain = React.createClass({

    menuItems : [
        { route: 'get-started', text: 'Get Started' },
        { route: 'css-framework', text: 'CSS Framework' },
        { route: 'components', text: 'Components' },
        { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
        {
            type: MenuItem.Types.LINK,
            payload: 'https://github.com/callemall/material-ui',
            text: 'GitHub'
        },
        {
            text: 'Disabled',
            disabled: true
        },
        {
            type: MenuItem.Types.LINK,
            payload: 'https://www.google.com',
            text: 'Disabled Link',
            disabled: true
        }
    ],

    handleClick:function(){
        console.log('i was click');
        this.refs.lf.toggle()
    },

    render: function() {
        var sty = {
            width:600,
            backgroundColor:'gray'
        };
        return (
            <div>
                <div>
                    <LeftNav ref="lf" docked={false} menuItems={this.menuItems} />
                </div>
                <div style={sty}>
                    <RaisedButton label="Toggle"  secondary={true} onTouchTap={this.handleClick} />
                </div>
            </div>
        );
    }
});

module.exports = MaterialMain;