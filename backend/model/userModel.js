const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"]
    }
},
    {
        timestamps: true
    }
)


module.exports=mongoose.model('users',userSchema)