var SearchBar = require('./SearchBar.jsx');
var ProductTable = require ('./ProductTable.jsx');

var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});

module.exports = FilterableProductTable;