<template>
    <div class="loading" >

        <div class="loadAnimation"> </div>
    </div>
</template>

<script>
    export default {
        name: "loading",

        created(){

        },

        destroyed() {

        }
    }
</script>

<style scoped>
.loading{
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}
    .loadAnimation{
        width: 80px;
        height: 80px;
        background-color:lightseagreen;
        animation: loading 2s infinite;

    }
    @keyframes loading {
         0%{
             width: 80px;
             height: 80px;
             background-color: lightpink;
             border-radius: 50%;
             transform: rotate(0);
    }
        25%{
            width: 90px;
            height: 90px;
            background-color: lightpink;
            border-radius:0;
            transform: rotate(90deg);
        }
        50%{

            width: 100px;
            height: 100px;
            background-color: lightskyblue;
            border-radius: 50%;
            transform: rotate(180deg);
        }
        75%{
            width: 115px;
            height: 115px;
            background-color: lightgreen;
            border-radius:0;
            transform: rotate(270deg);
        }

    }
</style>