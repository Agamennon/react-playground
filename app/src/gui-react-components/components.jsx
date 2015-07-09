
//var Button = require('./button.jsx');
import  {Button} from './button.jsx';
import  {Test} from './test.jsx';


export class Components extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick () {
       // console.log(this);
        console.log('i was cliqued!');
    };

    render(){
         return (
             <div>
            <Button handleClick={this.handleClick} kind="primary"> Hellosd </Button>
            <Test handleClick={this.handleClick} kind="primary"> from Trrrr </Test>
            </div>
        )
    }
}
/*
var Button = require('./button.jsx');
var Test = require('./test.jsx');


module.exports = React.createClass({

    handleClick:function(){
        console.log('i was cliqued!');
    },
    render(){
        return (
            <div>
              <Button handleClick={this.handleClick} kind="primary"> Hello Motherfuckers! </Button>
             <Test handleClick={this.handleClick} kind="primary"> from Test </Test>
                </div>
        )
    }
});
*/
