const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //띄어쓰기를 다 붙여줌(없애줌)
        unique:1 
    },
    password:{
        type:String,
        minlengh:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{//1 : 관리자
        type:Number,
        default:0

    },
    image:String, //그사람에 해당하는 이미지.
    token:{ //유효성 관리
        type:String
    },
    tokenExp:{ //토큰 유효기간
        type:Number
    }
});
const User = mongoose.model('User',userSchema)
module.exports = {User}