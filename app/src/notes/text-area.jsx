
var textArea = React.createClass({

    onChange:function(e){
        this.props.onNoteEdit({text:e.target.value});
    },

    componentDidMount:function(){
        this.props.onTextReady(this.refs.text);
    },

    render: function(){



        return (
            <div  className="fill-all">
                <textarea ref="text" value={this.props.text} onChange={this.onChange}  className="fill-all" />
            </div>
        );
    }

});

module.exports = textArea;

/*

 componentWillMount:function(){
 //     console.log('componentWillMount');
 console.log('componentWillMount ' + this.props.note + ' <-- this.props.note');

 },
 componentDidMount:function(){
 //   console.log('componentDidMount');
 console.log('componentDidMount ' + this.props.note + ' <-- this.props.note');
 },
 componentWillReceiveProps:function(newProps){
 //  console.log('componentWillReceiveProps');
 console.log('componentWillReceiveProps ' + this.props.note + ' <--  OLD this.props.note --- NEW ---> '+ newProps.note);
 },
 shouldComponentUpdate:function(){
 //  console.log('shouldComponentUpdate');
 console.log('shouldComponentUpdate ' + this.props.note + ' <-- this.props.note');
 return true;
 },
 componentWillUpdate:function(){
 // console.log('componentWillUpdate');
 console.log('componentWillUpdate ' + this.props.note + ' <-- this.props.note');
 },
 componentDidUpdate2:function(){
 // console.log('componentDidUpdate');
 console.log('componentDidUpdate ' + this.props.note + ' <-- this.props.note');
 },
 componentWillUnmount:function(){
 //  console.log('componentWillUnmount');
 console.log('componentWillUnmount ' + this.props.note + ' <-- this.props.note');
 },





 */
