let UserModel = require("../models/UserModel");
class UserService {
	constructor() {
		this.userModel = new UserModel();
	}

	// 登录
	login(username, password, callback) {
		// console.log("password----" + password)
		
		this.userModel.selectByUserName(username, (data) => {
			console.log(data);
			// 如果用户存在
			if (data.length) {
				// console.log("data-----" + JSON.stringify(data[0]))
				if (password === data[0].password) {
					// 自定义配置一个token
					callback({login:1,userID: data[0].id,userName:data[0].name,token:666666});
					
				} else {
					callback({login:0});
				}
				
			}else{
				callback({login:-1});

			}
		})
	}

	// 注册
// 	register(username, password, callback) {
// 		let that = this;
// 		this.msfuserModel.selectByUserName(username, function(data) {
// 			if (data.length == 0) {
// 				that.msfuserModel.insert(username, password, function(data) {
// 					console.log(data);
// 					if (data) {
// 						callback({
// 							msg:'注册成功'
// 						});
// 					}
// 				});
// 			} else { 
// 				callback({ msg: '注册失败' });
// 				res.json(data);
// 			}
// 		})
// 	}

}
module.exports = UserService;
