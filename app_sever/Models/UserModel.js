let SqlBase = require("./SqlBase");
class UserModel extends SqlBase {
  constructor() {
    super();
  }

  selectByUserName(username,callback) {
    let sql = `select * from user where name = '${username}'`;
    this.sqlQuery(sql, callback)
    
  }

  //注册   
//   insert(username,password,callback){
//     let sql = `insert into user(username,password) values('${username}','${password}')`;
//     this.sqlQuery(sql, callback)
// }

}
module.exports = UserModel;