var Showdown = require('showdown');
var converter =  new Showdown.converter();
var Comment = React.createClass({
    deleteHandler:function(){
        console.log('will delete');

        this.props.onCommentDelete(this.props.id);

    },
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                <button onClick={this.deleteHandler}> Delete </button>
            </div>
        );
    }
});

module.exports = Comment;