<template>
    <div class="art_item">
        <div class="head_img">

            <img src="../../../assets/img/test.jpg" />
            <div class="extend_info">
                <div class="icon"><img src="../../../assets/img/eye.png" height="20px" width="20px"/>   50</div>
                <div class="icon"><img src="../../../assets/img/good .png" height="20px" width="20px"/>   60</div>
            </div>
        </div>
        <div class="art_main">

            <div class="art_tit">{{tit}}</div>
            <div class="art_content">{{content}}</div>
            <div class="date">2017-5-13</div>
        </div>


        </div>



</template>

<script>
    export default {
        name: "artItem",
        data(){
            return{
                tit:"WEB的一生之敌",
                content:"前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...前言: 发现vue模板代码写多了, 自己的原生JS手写能力下降了不少, 闲来无事, 自己做一个简单的图片放大查看封装<!DOCT...",
                date:"2018-7-15",
                img_url:''
            }
        }
    }
</script>

<style scoped>
.art_item{
    display: flex;

    width: 70%;
    height: 200px;
    position: relative;
    margin-bottom: 20px;

}
.head_img{
    position: relative;
    width: 10%;
    border-radius: 50%;
    align-self: center;
    display: inline-block;
}
.head_img img{
    border: medium double black;
       width:100%;
        border-radius: 50%;
    }
    .art_main{
        padding-left: 20px;

        display: inline-block;
        width: 90%;
        height: 200px;
        overflow: hidden;

    }
.art_main .art_tit{
    font-size: 25px;
    width: 100%;
    font-weight: bold;
    font-family: "微软雅黑 Light";
    height: 100px;
    line-height: 100px;
  
}
    div.date{
        line-height: 30px;
        width: 50px;
        height: 30px;
        position: absolute;
        top:10px;
        right: 0;
        background-color: white;
    }
    .art_content{
        width: 100%;
        height: 20%;
        text-overflow: ellipsis;
        overflow: hidden;
        background-color: #fff;
    }
    div.line{
        width: 10%;
     margin: 0 auto;

    }
    .extend_info{
        border-top: 1px solid black;

        width: 100%;
        top:50%;
        opacity: 0;
        margin-top:-50px;

        height: 100px;

        position: absolute;
        transition: all 1s;
    }
.extend_info:hover{
    opacity: 1;
    transform: translateX(-100%);
}
.extend_info .icon img{
    padding-right: 10px;
    border: none;
    width: 20%;
    height: auto;

}
    </style>