const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email :{
        type :String,
        required : true,
    },
});

    userSchema.plugin(passportLocalMongoose);

    module.exports = moongoose.model('User', userSchema);

