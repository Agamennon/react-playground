var Note = require('./note.jsx');
//var MagicMove = require('react-magic-move');

var noteList = React.createClass({

    titleClick: function(e){
     //   var notes = React.findDOMNode(this.refs.notes);
        this.props.onNoteSelect({
            selectedNote : e.target.value
        });
    },

    render: function(){
        var notes  = this.props.notes.map( (item,key) => {
            return (
              <Note  value={item.id} key={item.id}>
                  {item.title}
              </Note>
            );
        });
        return (
            <select value={[this.props.selectedID]} onClick={this.titleClick} ref="notes" className="fill-all" multiple={true}>
                {notes}
            </select>
        );
    }

});

module.exports = noteList;