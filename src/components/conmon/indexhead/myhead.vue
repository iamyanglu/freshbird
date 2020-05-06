<template>
    <div class="myHead">
        <div class="pro"><img src="../../../assets/img/pro.jpg" /></div>
        <div class="out_info">
            <div class="infoBox">
                <span>&#8226;</span>
                <div v-html="name"> </div>
                <span>&#8226;</span>
                <div v-html="stu"> </div>
                <span>&#8226;</span>

                <div v-html="email"></div>
                <span>&#8226;</span>

            </div>
        </div>

        <div class="skill"  v-html="skill"></div>
        <div class="extend">

            <a href="https://space.bilibili.com/358598231/article" target="view_window"><img src="../../../assets/img/bilibili.png" /></a>
            <a href="https://www.github.com/iamyanglu" target="view_window"> <img src="../../../assets/img/githubb.png"/></a>
            <a href="https://weibo.com/u/6785866223" target="view_window"><img src="../../../assets/img/weibo.png"/></a>

        </div>
        <div class="motto">
            talk is cheap, show me the code   --linus
        </div>

     </div>
</template>

<script>
    export default {
        name: "myhead",
        computed:{
            skill(){
                let str1 = this.skilllist
                let r = str1.match(/[a-z]+-?\d?/ig)

                for (let index =0;index<r.length;index++)
                {
                    str1 =str1.replace(r[index],'<a style="color: red">'+r[index]+ '</a>')
                }


                return str1
            }
        },
        methods:{
          initHead(){
              document.querySelector('.myHead').style.height=document.documentElement.clientHeight + 'px'
              console.log(document.documentElement.clientHeight);

          }
        },
        data(){
            return{
                name:"Yanglu`s 博客",
                stu:"发表文章",
                email:"邮箱地址:499339182@qq.com",
                skilllist:'技术栈 ：html,css,js 使用 vue-cli进行vue前端开发.掌握 vuex ，vueRouter，promise，axios，掌握基本es6语法和简单高阶函数，' +
                    'webpack基本打包知识,使用node中express进行简单api编写，掌握node操作mongodb基本知识.'
            }
        },
        created() {

        },
        mounted() {
            this.initHead()
        }
    }
</script>

<style scoped>
.myHead{
    width: 100%;
    height: 700px;
    background-color: #eeeeee;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.pro{

    margin: 10px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;

}

    .pro img{
        margin-top: 50px;
        border-radius: 50%;
        width: 80px;
        height: 80px;

    }
    .out_info{
        width: 100%;

    }
    .infoBox {
        transform: translateX(50%);
        font-size: 12px;

    }
.infoBox div{

    height: 25px;
    line-height: 25px;
    padding-left: 5px;
    border-left: 1px solid black;
}
    .skill{
      width: 80%;

    }
    .extend{

    }
.extend{

    width: 100%;
 display: flex;
    justify-content: center;
}
.extend img{
        margin-left: 10px;
        width: 25px;
        height: 25px;
    }
</style>