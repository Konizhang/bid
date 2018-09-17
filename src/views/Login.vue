<template>
  <div class="login">
		<h2>用户登录: </h2>

		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="用户名"
    prop="username"
    :rules="[
      { required: true, message: '用户名'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.username" autocomplete="off"></el-input>
  </el-form-item>


	<el-form-item
    label="密码"
    prop="password" 
    :rules="[
      { required: true, message: '密码不能为空'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <router-link to="/forget"> 忘记密码</router-link>  <router-link to="/register">注册一个新的用户</router-link> 
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
</el-form>



  </div>
</template>
<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.login {
  margin: 0 auto;
  width: 500px;
}
</style>
