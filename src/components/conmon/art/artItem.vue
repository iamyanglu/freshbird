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

            <div class="font-line">  <div class="art_tit" @click="todetail"><h1>{{item.tit}}</h1></div>  <div class="date">{{artdate}}</div></div>
            <div class="art_content">{{item.content | filterContent}}</div>
            <div class="label_bot"><slot></slot></div>

        </div>
        </div>


</template>

<script>
    export default {
        name: "artItem",
        props:['item'],
        filters:{
            filterContent(txt){
                txt = txt.replace(/#/g," " )
                txt = txt.replace(/~/g," ")
                return txt
            }

        },
        computed:{
            artdate()
            {
               const Y =  new Date(this.item.date).getFullYear()

                const M =  new Date(this.item.date).getMonth() + 1
                const D=  new Date(this.item.date).getDate()
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
    position: relative;

}
.head_img{
    transform: translateY(30%);
    z-index: 10;
    position: relative;
    width: 10vw;
    max-width: 100px;
    max-height: 100px;
    height: 10vw;


}
.head_img img{
    position: relative;

    border: medium double black;
     width:100%;
     height: 100%;
        border-radius: 50%;
    }
    .art_main{
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 200px;
        overflow: hidden;

    }
    .art_main .font-line{
       height: 30%;
        display: flex;

        align-items: center;

    }
.art_main .art_tit{



    font-weight: bold;



  
}
    div.date{
        font-weight: 100;
        width: 100px;
        margin-left: auto;
    }
    .art_content{
        width: 100%;
        height: 20%;
        text-overflow: ellipsis;
        overflow: hidden;
        background-color: #fff;
    }

    .extend_info{
        border-top: 1px solid black;
        width: 90%;
        top:50%;
        opacity: 0;
        margin-top:-30px;
        position: absolute;
        height: 100px;
        transition: all 1s;
    }
.extend_info:hover{
    opacity: 0.8;
    transform: translateX(-100%);
}
.extend_info .icon img{
    padding-right: 10px;
    border: none;
    width: 20%;


}
.art_tit{
    width: 80%;
    cursor: pointer;
    transition: all 0.5s;
}
.art_tit:hover{
    color: red;
}
    .label_bot{
        width: 100%;
        display: flex;
        height: 50px;

    }

    </style>