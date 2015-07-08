
var guiComboRenderCustom = React.createClass({
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
//        var self = this;

        var items;
        function randerCustomItems (data,child){
            return  data.map(function (item,index) {


                var obj = {};
                for (var key in item){
                    obj[key] = item[key];
                }
                var thechild = React.cloneElement(child,obj);

                return (
                    <li key={index}   style={liStyle}>
                        {thechild}
                    </li>
                );
            });
        }


        if (this.props.children){
            var child = React.Children.only(this.props.children);
            items = randerCustomItems(this.props.data,child);
        }else{
            items = this.props.data.map(function (item,index) {
                return (
                    <li key={index}   style={liStyle}>
                        <span>nocustom {item} </span>
                    </li>
                );
            }.bind(this));
        }

        return (
            <div> {items} </div>
        )
    }
});

module.exports = guiComboRenderCustom;