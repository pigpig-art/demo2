class SqlBase{
    constructor(){
        let mysql = require("mysql");
        this.connection = mysql.createConnection({
            host:"127.0.0.1",
            user:"root",
            password:"root",
            port:"3306",
            database:"mysql_test"
        });
        this.connection.connect();
    }

    sqlQuery(sql, callback) {

        this.connection.query(sql, function (err, data) {
            if (err) {
                console.log("错误：" + err)
                return
            }
          callback(data)
          console.log(data);
          
        })

    }
    
}
module.exports = SqlBase;