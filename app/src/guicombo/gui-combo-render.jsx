
var guiComboRender = React.createClass({
    getInitialState: function() {
        return {
            isSelected: false
        };
    },
    render: function() {

        var  liStyle = {
            flex:1,
            background:'yellow'
        };

          var items = this.props.data.map(function (item,index) {
                return (
                    <li key={index}   style={liStyle}>
                        <span>nocustom {item} </span>
                    </li>
                );
            }.bind(this));


        return (
            <div> {items} </div>
        )
    }
});

module.exports = guiComboRender;