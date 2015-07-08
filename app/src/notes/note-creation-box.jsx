var TextArea = require('./text-area.jsx');
var S = require('react-style');
var noteCreationBox = React.createClass({

    getInitialState:function(){
        return {
            userEdited:false
        };
    },

    setUserEdited:function(setting){

        this.setState({userEdited:setting})
    },

    onTitleEdit : function(e){
        var val = true;
        if (e.target.value.length < 1)
            val = false;
        this.setState({userEdited:val});
        this.props.onTitleEdit({title:e.target.value});
    },

    render: function() {

        return (
            <div className="fill-all">
                <div  className="fill-all">
                    <label>Titulo: </label>
                    <input onChange={this.onTitleEdit} value={this.props.note.title} />
                    <TextArea onTextReady={this.props.onTextReady} onNoteEdit={this.props.onNoteEdit} text={this.props.note.text}/>
                </div>
            </div>
        );
    }
});

module.exports = noteCreationBox;