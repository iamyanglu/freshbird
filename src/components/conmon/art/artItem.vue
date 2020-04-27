<template>
    <div class="art_item">
        <div class="head_img">

            <img :src="item.head_img" />
            <div class="extend_info">
                <div class="icon"><img src="../../../assets/img/eye.png" height="20px" width="20px"/> {{item.fabulous}}</div>
                <div class="icon"><img src="../../../assets/img/good .png" height="20px" width="20px"/> {{item.inspect}}</div>
            </div>
        </div>
        <div class="art_main">

            <div class="art_tit" @click="todetail">{{item.tit}}</div>
            <div class="art_content">{{item.content}}</div>
            <div class="date">{{artdate}}</div>
        </div>


        </div>



</template>

<script>
    export default {
        name: "artItem",
        props:['item'],
        computed:{
            artdate()
            {
               const Y =  new Date(this.item.date).getFullYear()
                console.log(Y);
                const M =  new Date(this.item.date).getMonth() + 1
                const D=  new Date(this.item.date).getDay()+1
                return Y+'-'+M+'-'+D
            }
        },
        data(){
            return{

            }
        },
        methods:{
            todetail(){
                this.$router.push('/detail/'+this.item._id)
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
    width: 100px;
    height: 100px;

    border-radius: 50%;
    align-self: center;
    display: inline-block;
}
.head_img img{
    border: medium double black;
       width:100%;
    height: 100%;
        border-radius: 50%;
    }
    .art_main{
        padding-left: 20px;
        display: flex;

        display: inline-block;
        width: 90%;
        height: 200px;
        overflow: hidden;

    }
.art_main .art_tit{
    display: flex;
    flex-shrink: 3;

    font-size: 20px;
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
.art_tit{
    cursor: pointer;
    transition: all 0.5s;
}
.art_tit:hover{
    color: red;
}
    </style>