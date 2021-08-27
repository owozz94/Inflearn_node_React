const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yun:yume1122@boilerplate.z8ajx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(() => console.log('MongoDB Connected...')) //연결이 됐을때 콜솔
.catch(err => console.log(err)) //위에 use... 설정 안하면 오류날 수 있음.
//위에 안 써주면 에러가 뜸.
app.get('/', (req, res) => res.send('Hello wolrd! hihi~'))

app.listen(port, () => console.log('Example app listening on port',{port}))
//npm run start 후에 인터넷에 http://localhost:5000/ 입력.
//mongoose를 이용해서 어플과 몽고db 연결.