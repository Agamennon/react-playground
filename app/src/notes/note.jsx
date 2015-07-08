var React = require('react/addons');

var note = React.createClass({

    super:function(){
      return 3
    },
    render: function(){
        return (
            <option  value={this.props.value}>{this.props.children}</option>
        );
    }
});

module.exports = note;