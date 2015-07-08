var GuiCombo = require('./guicombo.jsx');

var Teste = React.createClass({
        render : function(){

        return (
            <div>
                <div><span>nome = </span>{this.props.nome}</div>
                <div><span>animale = </span>{this.props.some.guy}</div>
                <div><span>sobrenome = </span>{this.props.sobrenome}</div>
            </div>
        );
    }
});


var guicombotest = React.createClass({

    test : function(){
      this.refs.myCombo.value();
    },

    render: function() {
        //var data = ['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11','item12','item13','item14','item15'];
        var data = [{nome:'gui',sobrenome:'guerch', some:{guy:'random guuuuy'}},{nome:'leo',sobrenome:'mcnulty'}];


        return (
            <div onClick={this.test}>
                <GuiCombo  ref="myCombo" data={data}>
                  <Teste some={{}}/>
                </GuiCombo>
                <input />
                <GuiCombo data={data}>

                </GuiCombo>

            </div>
        )
    }
});

module.exports = guicombotest;