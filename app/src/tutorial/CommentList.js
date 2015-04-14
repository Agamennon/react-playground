var Comment = require('./Comment.js');

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {

            return (
                <Comment onCommentDelete={this.props.onCommentDelete} key={comment.id} id={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        }.bind(this));
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

module.exports = CommentList;