<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">  <el-button type="primary">我的报价</el-button></router-link> 
      <router-link to="/about"> <el-button type="success">我要报价</el-button></router-link>
      <router-link to="/bid"> <el-button type="warning">发布需求</el-button></router-link>
      <router-link to="/login"> <el-button type="warning">登录</el-button></router-link>
    </div>
    <router-view/>
   
   </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
