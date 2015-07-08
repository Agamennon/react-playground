/*
export class Components extends React.Component {

    onClickHandler (){
        alert('i was cliqued!');
    };

    render(){
        return <div> <span  onClick={this.onClickHandler()}>Hellfkfkoo0000oo</span>
             </div>
    }
}
*/
var Button = require('./button.jsx');


module.exports = React.createClass({

    handleClick:function(){
        console.log('i was cliqued!');
    },
    render(){
        return (
        <Button handleClick={this.handleClick} kind="primary"> Hello Motherfuckers! </Button>

        )
    }
});
