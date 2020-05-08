let UserService = require("../Services/UserService");

// 登录
module.exports.login = function (req, res) {

    let username = req.query.username;
    let password = req.query.password;
    // console.log(username+"用户名" );

    // console.log(password+"传入的密码" );
    
    let userService = new UserService();

    userService.login(username, password, function (data) {
        res.json(data);
        console.log(data);
        
    })
}

// module.exports.register = function (req, res) {
//     // 解析前端提交过来的数据
//     let username = req.query.username;
//     let password = req.query.password;
//     // 新建一个对象
//     let userService = new UserService();
//     // 调用业务逻辑层的register方法
//     userService.register(username, password, function (data) {
//         res.json(data);
//     })
// }