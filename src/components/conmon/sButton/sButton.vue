<template>
    <div class="getMore" v-if="totalNum > artNum">
        <a class="button" @click="btnClick">加载更多</a>
    </div>
</template>

<script>
    export default {
        name: "sButton",
        props:['artNum','totalNum'],
        methods:{
            btnClick(){
               this.$emit('getmoreart')
            }
        },
        created() {
            console.log(this.totalNum,this.artNum);
        }
    }
</script>

<style scoped>
    .button{
        display: inline-block;
        width: 150px;
        height: 60px;
        border: 1px solid black;
        text-align: center;
        line-height: 60px;
        border-radius: 2%;
        color: #888888;
        margin-bottom: 40px;

    }
.getMore{
    display: flex;
    justify-content: center;
    width: 100%;


}
</style>