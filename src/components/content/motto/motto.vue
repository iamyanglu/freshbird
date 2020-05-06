<template>
    <div class="motto_mid">

        <div class="main_motto" @click="isShow=!isShow">
            剑气纵横三万里，一剑光寒十九州
        </div>
        <transition>

            <div class="extend_motto" v-show="isShow">
                <p>这世界本来就没有什么问题</p>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "motto",
        data(){
            return {
                isShow:false
            }
        },

    }
</script>

<style scoped>
.motto_mid{
    margin: 20px;
    width: 100%;
    height: 130px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
    .main_motto{
        width: 80%;
        height: 70px;
        background-color: #eeeeee;
        text-align: center;
        line-height: 70px;
        color: lightsalmon;
    }
    .extend_motto{
        width: 80%;
        height: 60px;
        background-color: lightseagreen;
    }

</style>