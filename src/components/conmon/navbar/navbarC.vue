<template>
    <div  @click="btnClick" class="item" :style="style">
       {{txt}}
    </div>
</template>

<script>
    export default {
        name: "navbarC",
        props:['path','txt'],
        computed:{
            style(){
                return   this.path.indexOf(this.$route.path) >= 0 ? {color:'red'}:{ }
            }
        },
        methods:{
            btnClick(){
                this.$router.replace(this.path)
            }
        },

    }
</script>

<style scoped>
.item{
    height: 49px;
    line-height: 49px;
    min-width: 60px;
    text-align: center;
    flex: 1;
    display: inline-block;
    transition: all 0.35s;
    cursor: pointer;
}
.item:hover{
    font-size: 20px;
    color: red;
}
</style>