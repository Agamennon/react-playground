
var notes = [
    {id:'10',title: "Super Nota 1", text: "teste da nota 1"},
    {id:'20',title: "Ir dormir", text: "eu tenho que ir dormir"},
    {id:'30',title: "Acordar cedo", text: "acrodar cedo para nao perder o batizado"},
    {id:'40',title: "Ir no batizdo", text: "ver a crianca receber de um velho abistinente H2O sagrada"},
    {id:'50',title: "Voltar para casa", text: "dormir o que me foi descontado"}];
var selectedID = '20';

var actions = require('./actions.jsx');

var store = Reflux.createStore({
    listenables: [actions],

    data : {
        selectedID: '-1',
        notes: [{id: '-1', title: '', text: ''}]
    },

    init (){
     // console.log(actions);
      //  var self = this;

      setTimeout(()=>{ //pegar as notas do banco de dados
             console.log('i am getting data');
            this.data = {notes,selectedID};
            this.trigger(this.data);
        },2000)
    },

    onSomeEvent(msg){
        console.log('Salvando coisas '+msg);
    },

    getInitialState() {
        return this.data;
    }
});

module.exports = store;