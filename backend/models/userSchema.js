const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
        username: {
                type: String,
                minlength: [5, 'minimum length of username should be 5 characters'],
                maxlength: [15, 'maximum length of username should be 15 charcters long'],
                unique: [true, 'username already exists'],
                required: [true, 'username is required']

        },
        email: {
                type: String,
                unique: true,
                required: [true, 'User email is required'],
                validate: {
                        validator: function (v) {
                                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
                        },
                        message: props => `${props.value} is not a valid email!`
                }
        },
        password: {
                type: String,
                validate: {
                        validator: function (v) {
                                return /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(v);
                        },
                        message: props => `${props.value} should have 2 uppercase, one special character, two digits, atleast 8 character long!`
                },
                

        }
      
})

const User = mongoose.model('User', userSchema)



module.exports = User;