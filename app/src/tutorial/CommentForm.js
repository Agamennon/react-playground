var React = require('react/addons');
var mui = require('material-ui');

//require('material-ui/src/less/scaffolding.less');
//require('material-ui/src/less/components.less');

var validation = require('../../common/validate.js');

var CommentForm = React.createClass({
    mixins: [validation],
    handleSubmit: function(e) {
        e.preventDefault();
        validation.validate('here is some data fucker!');
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },

    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" className={"teste"} placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />

            </form>
        );
    }
});

module.exports = CommentForm;