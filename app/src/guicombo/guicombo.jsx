
//var cn = require('classnames');
var GuiComboRender = require('./gui-combo-render.jsx');
var GuiComboRenderCustom = require('./gui-combo-render-custom.jsx');
var validate = require('../../common/validate.js');

var guicombo = React.createClass({

    mixins: [
        require('react-onclickoutside'),validate   //https://github.com/facebook/react/issues/579
    ],

    value : function(){
      console.log('i have value bitch!');
        console.log(this.props.data);
    },

    getInitialState: function() {
        return {
            isOpen: false
        };
    },

    arrowClick : function(){
        validate.validate('from another');
        this.setState({isOpen: !this.state.isOpen});
        //      alert(this.state.isOpen);

    },

    handleClickOutside: function(evt) {
        this.setState({isOpen: false});

    },

    render: function() {

        //  var cx = React.addons.classSet;


        var classes = classnames({
            'isOpen': this.state.isOpen
        });



        var

            showDisplay = this.state.isOpen ? 'block' : 'none',
            mainDivStyle = {
                maxWidth :'300px',
                position:'relative'
            },
            resultListStyle = {
                maxHeight :'120px',
                overflow: 'auto',
                overflowX: 'hidden',
                zIndex: 100,
                position: 'absolute',
                width: '100%',
                display: showDisplay
            },
            comboStyle = {
                display : 'flex'


            },
            inputStyle = {
                flex:1

            },
            buttonStyle = {

            },
            ulStyle = {
                display :'flex',
                flexDirection:'column'
            };




        function style(){
            return {__html: "\
                .guicomboseach::-webkit-search-cancel-button {\
                  -webkit-appearance : none;\
                  height: 10px;\
                  width: 10px;\
                  background: red;\
                }"
            }
        }

        var renderMethod;
        if (this.props.children){

            renderMethod = <GuiComboRenderCustom data={this.props.data}>
                              {this.props.children}
                           </GuiComboRenderCustom>
        } else {

            renderMethod = <GuiComboRender data={this.props.data}/>
        }

        return (

            <div style={mainDivStyle} className="guicombo">
                <div  style={comboStyle}>
                    <style dangerouslySetInnerHTML={style()}></style>
                    <input   type="search" className='guicomboseach' style={inputStyle} />
                    <button  onClick={this.arrowClick} style={buttonStyle}> ▼ </button>
                </div>
                <div   className={classes} style={resultListStyle}>
                    <ul style={ulStyle}>
                        {renderMethod}
                    </ul>
                </div>

            </div>

        )
    }
});

module.exports = guicombo;




