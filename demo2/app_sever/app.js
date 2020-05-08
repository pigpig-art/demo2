const express = require('express')
const app = express()


//处理跨越
// app.all('*', function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });


app.get('/info', (req, res) => res.send('Hello World!'))

let UserController = require("./Controller/UserController");
app.get("/login", UserController.login)
// app.get("/register", UserController.register)

app.listen(8888, () => console.log('server runing in port 8888!'))
