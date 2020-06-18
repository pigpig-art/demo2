<template>
  <div>
    <h1>发送请求</h1>
    <h1>这是获取的文本：{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
      return{
        text:''
      }
  },

  methods: {
    getInfo() {
        this.$http.get('/info').then(res=>{
            console.log(res);
            this.text=res.data
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
  },

  mounted() {
    this.getInfo();
  }
};
</script>

<style lang="stylus" scoped></style>