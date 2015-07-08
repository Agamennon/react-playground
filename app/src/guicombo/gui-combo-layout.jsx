
var guiComboLayout = React.createClass({


    render: function() {

        return (


            <div>
                {this.props.item.nome}
                {this.props.item.sobrenome}
            </div>

        )
    }
});

module.exports = guiComboLayout;

