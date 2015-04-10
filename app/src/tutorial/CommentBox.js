//var React = require('react/addons');

var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var RouteHandler = Router.RouteHandler;
//var RouteHandler = require('react-router');
//var Router = require('react-router');
//var RouteHandler = Router.RouteHandler;

//mock data


var CommentBox = React.createClass({

    getInitialState: function(){
        return {data:[]}
    },

    loadCommentsFromServer: function(){
        sa.get(this.props.url).end(function(err,res){
            if (!err){
        //        console.log(res.body);
                this.setState({data:res.body});
            }
            else
                console.log(err);

        }.bind(this));
    },

    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        sa.post(this.props.url).send(comment).end(
            function(err,res){
                if (!err){
                    console.log(res);
                    this.setState({data:res.body});
                }
                else
                    console.log(err);
            }.bind(this)
        );


    },

    handleCommentDelete: function(commentID){
        this.state.data.map(function(comment,index,data){
            if (comment.id === commentID){
                this.setState(data.splice(index,1));
            }
        }.bind(this));
        sa.del(this.props.url+'/'+commentID).end(function(err,res){
            if (err){
                console.log(err)
            }else{
                console.log(res);
            }
        });
    },

    render: function() {

        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList onCommentDelete={this.handleCommentDelete} data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});


module.exports = CommentBox;
/*
 React.render(
 <CommentBox />,
 document.getElementById('content')
 );*/
