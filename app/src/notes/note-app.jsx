
var NoteListBox = require ('./note-list-box.jsx');
var NoteCreationBox = require('./note-creation-box.jsx');
var S = require('react-style');
var noteStore = require('./noteStore.jsx');
var actions = require('./actions.jsx');

var noteApp = React.createClass({

    mixins: [Reflux.connect(noteStore)],

    newNote: function(){
        //gera nova id, usa o maior valor de ids + 10
        var newID = (parseInt(_.max(this.state.notes, 'id').id)+10).toString();
        this.refs.noteCreationBox.setUserEdited(false);
        //adiciona o nova nota vazia no modelo
        this.state.notes.push({
            id:newID,
            title:'',
            text:''});
        this.setState({
            selectedID:newID,
            notes:this.state.notes
        });
        //foca o textarea que contem a nota para edição
        this.state.textReference.getDOMNode().focus();
    },

    //fiz diferente chamando deleteNote.bind para mostrar como passar parametros para funcoes no react
    deleteNote: function(notes,id){
        //entcontra o indice e deleta a nota
      var index = _.findKey(notes,'id',id);
        //remove o item de notes
       _.pullAt(notes,index);
       //seta notas e selectedID para o primeiro item da coleção
       this.setState({
           notes:notes,
           selectedID:_.first(notes).id
       });
    },

    selectNote: function(selectedNote){
        this.setState({
            selectedID:selectedNote
        });
    },

    onNoteSelect: function(e){
        this.selectNote(e.selectedNote);
        this.state.textReference.getDOMNode().focus();
    },

    onTextReady: function(textReference){
       this.setState({textReference:textReference});
    },

    onNoteEdit: function(e){
        var note = _.find(this.state.notes,'id',this.state.selectedID);
        note.text = e.text;
        if (!this.refs.noteCreationBox.state.userEdited){
            note.title = _.trunc(e.text,24);
        }
        this.setState({notes:this.state.notes});
    },

    onTitleEdit:function(e){
        var note = _.find(this.state.notes,'id',this.state.selectedID);
        note.title = e.title;
        this.setState({notes:this.state.notes});
    },

    render: function () {

        var note = _.find(this.state.notes,'id',this.state.selectedID);

        return (
            <div className="fill-all">
                <div>
                    <button onClick={this.newNote}>New Note</button>
                    <button onClick={this.deleteNote.bind(this,this.state.notes,this.state.selectedID)}>Delete Note</button>
                    <button onClick={actions.onSomeEvent}>Save</button>
                </div>
                <div className="flex-row fill-all">
                    <div  className="grow-1 fill-h">
                        <NoteListBox selectedID={[this.state.selectedID]} onNoteSelect={this.onNoteSelect} notes={this.state.notes}/>
                    </div>
                    <div className="grow-10 fill-h">
                        <NoteCreationBox ref="noteCreationBox" onTitleEdit={this.onTitleEdit} onTextReady={this.onTextReady} onNoteEdit={this.onNoteEdit} note={note} />
                    </div>

                </div>
            </div>
        );
    }
});


module.exports = noteApp;

/*
 var s = S.create({
 grid:{
 backgroundColor:'grey'
 }
 });


 */
