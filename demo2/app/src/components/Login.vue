<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box"><img src=../assets/logo.png alt=""></div>
      <!-- 登录表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-icon_suo-"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    reset() {
      this.$refs.loginFormRef.resetFields();
      console.log(this);
    },
    login() {
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      // 1.promise
      return new Promise(resolve => {
        resolve();
        this.$refs.loginFormRef.validate(valid => {
          if (!valid) return;
          this.$http
            .get("/login", {
              params: {
                username,
                password
              }
            })
            // console.log(res);
            
            .then(data => {
              console.log(data);
            });
        });
      });

      // 2.async await
      // this.$refs.loginFormRef.validate(async valid => {
      //   console.log(valid);
      // 根据判断valid，是否发起请求
      // if (!valid) return;
      // const res=await this.$http.get("/login", {
      //     params: {
      //       username,
      //       password
      //     }
      //   })

      //   console.log(res.data);
      // });

      //  3.axios
      // this.$refs.loginFormRef.validate( valid => {
      // console.log(valid);
      // 根据判断valid，是否发起请求
      // if (!valid) return;

      //   this.$http
      //   .get("/login", {
      //     params: {
      //       username,
      //       password
      //     }
      //   })
      //   .then(res => {
      //     console.log(res);
      //     if (res.data.login == 1) {
      //       alert('登录成功')
      //       window.sessionStorage.setItem('token',res.data.token)
      //       // 把用户名保存到本地
      //       localStorage.setItem("userID",res.data.userID);
      //       localStorage.setItem("userName",res.data.userName);
      // 			this.$router.push('./home')
      // 		} else if(res.data.login == 0){
      // 			alert('您输入的密码错误')
      // 		}else{
      //       alert("账号不存在,请先注册");
      //     }

      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //  });
    }
  }
};
</script>

<style scoped >
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px;
  border: 1px solid #eee;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>>


