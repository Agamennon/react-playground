

@Radium
export class Button extends React.Component {
    static propTypes = {
        kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    };

    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);

    }

    buttonClick(a,b,c) {
        console.log('a');
        console.log(a);
        console.log('bbb');
        console.log(b);
        console.log('c');
        console.log(c);
        console.log('fim');
        this.props.handleClick();
    }

    render() {
        // Radium extends the style attribute to accept an array. It will merge
        // the styles in order. We use this feature here to apply the primary
        // or warning styles depending on the value of the `kind` prop. Since its
        // all just JavaScript, you can use whatever logic you want to decide which
        // styles are applied (props, state, context, etc).
        return (
            <button onClick={this.buttonClick}
                style={[
          styles.base,
          styles[this.props.kind]
        ]}>
                {this.props.children}
            </button>
        );
    }
}

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
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


/*

module.exports = Radium(React.createClass({
    displayName: "Button",

    propTypes: {
        kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    },

    buttonClick : function(a,b,c){
        console.log('a');
        console.log(a);
        console.log('AsdfsdfsdfsdSASASAS ');
        console.log(b);
        console.log('c');
        console.log(c);
        console.log('fim');
      this.props.handleClick();
    },

    render: function () {
        // Radium extends the style attribute to accept an array. It will merge
        // the styles in order. We use this feature here to apply the primary
        // or warning styles depending on the value of the `kind` prop. Since its
        // all just JavaScript, you can use whatever logic you want to decide which
        // styles are applied (props, state, context, etc).
        return (
            <button onClick={this.buttonClick}
                style={[
          styles.base,
          styles[this.props.kind]
        ]}>
                {this.props.children}
            </button>
        );
    }
}));

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    base: {
        padding: '1.5em 2em',
        border: 0,
        margin: 3,
        borderRadius: 4,
        color: '#fff',
        cursor: 'pointer',
        fontSize: 16,
        fontWeight: 700,


        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
            background: color('#0074d9').lighten(0.2).hexString()
        },
        ':active':{
            background: color('#0074D9').lighten(0.4).hexString()
        },

        // If you specify more than one, later ones will override earlier ones.
        ':focus': {
   //         boxShadow: '0 0 0 3px #eee, 0 0 0 6px #0074D9',
            outline: 'none'
        }
    },

    primary: {
        background: '#0074D9'
    },

    warning: {
        background: '#FF4136'
    }
};
*/
