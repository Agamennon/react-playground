var validation = {
    num:0,
    validate: function(data) {

      //  console.log('i have validated shit!' + data + ' num='+ this.num);
        this.num++
    }

};
validation.validate()
module.exports = validation;