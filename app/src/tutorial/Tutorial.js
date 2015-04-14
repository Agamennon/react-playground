var CommentBox = require('./CommentBox.js');


var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];



var Turorial = React.createClass({

    render: function() {
        return (
            <CommentBox  url="/comments" pollInterval={2000}   />
        );
    }
});

module.exports = Turorial;