var NoteList = require('./note-list.jsx');

var noteListBox = React.createClass({

    render: function(){
        return (
           <div className="fill-h">
               <NoteList selectedID={this.props.selectedID} onNoteSelect={this.props.onNoteSelect} notes={this.props.notes} />
           </div>
        );
    }
});

module.exports = noteListBox;