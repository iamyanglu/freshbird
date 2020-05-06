<template>
    <div id="log">
        <div class="log_box">
            <input placeholder="User"  v-model="userName" size="20"/>
            <input placeholder="Uassword" v-model="passWord" size="20" />
            <a  type="button" @click="login">登陆</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log",
        methods:{
            init(){
                let log = document.querySelector("#log")
                log.style.width = document.documentElement.clientWidth+ 'px'
                log.style.height= document.documentElement.clientHeight - 49 + 'px'

            },
            login(){
                let usergx = /[a-zA-Z0-9]{5,15}/
                let pass = /[a-zA-Z0-9]{5,15}/
                if(usergx.test(this.userName) && pass.test(this.passWord)){
                    window.localStorage.setItem('isLog',true)
                    this.$store.commit('log')
                    this.$router.replace('/admin')

                }
                else{
                    alert("格式出错 /[a-zA-Z0-9]{5,15}/   ")
                }

            }

        },
        mounted() {
            this.init()
        },
        data(){

            return {
                userName: '',
                passWord:''
            }
        },
        created() {
            this.$emit('loaded')
        }
    }
</script>

<style scoped>
#log{

   background-image: url("~@/assets/img/logBgc.jpg");
  height: 1200px;
}
    .log_box{


        margin: 0 auto;
        width: 600px;
        height: 300px;

        transform: translateY(100px);

    }
.log_box input{
    padding-top: 70px;
    padding-bottom: 0px;

    font-size: 20px;

 width: 100%;
    background: rgba(0,0,0,.0);
    border-bottom: 1px solid black;

}
.log_box a{
    margin: 20px auto;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    display: block;
    box-shadow: 1px 1px #000000;
    width: 100px;
    height: 50px;
    background-color: lightsalmon;
}
</style>