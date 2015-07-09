
@Radium
export class Test extends React.Component {

    constructor(props) {
        super(props);
        this.styles = sty;
        this.handleClick = this.handleClick.bind(this);
        //this.styles = sty;
    }

    handleClick () {
        var x = 27;
        var y = 30 ;
        var z = x + y;
        console.log(z);
        console.log(this.styles);
      //  console.log('i was cliqued!');
    };

    render(){

        return (
            <div >
                <button  style={[
          this.styles.base,
          this.styles[this.props.kind]
        ]} onClick={this.handleClick}>   {this.props.children}</button>
            </div>
        )
    }
}

var sty = {
    base: {
        color: '#fff',

        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
            background: color('#0074d9').lighten(0.4).hexString()
        }
    },

    primary: {
        background: '#0074D9'
    },

    warning: {
        background: '#FF4136'
    }
};

module.hot.accept();



/*module.exports = React.createClass({

    buttonClick:function() {
        var x = 27;
        var y = 445 ;
        var z = x + y;
        console.log(z);
        this.props.handleClick();
    },


    render: function () {
        var sty = {color : 'red'};
        return (
            <div>
                <button style={sty} onClick={this.buttonClick}>Test</button>
            </div>
        );
    }
});*/
