<template>
    <div class="mylabel">
        <span class="label_img"><img src="../../../assets/img/mylabel.png" />#{{txt}}</span>
    </div>
</template>

<script>
    export default {
        name: "label",
        props:['txt'],created() {
            console.log(this.txt);
        }
    }
</script>

<style scoped>
    .mylabel{
        width: 90px;
        height: 50px;
        display: inline-block;

    }

    .label_img img{

        font-size: 8px;
        margin-top: auto;
        width: 20px;
        height: 20px;
        display: inline-block;

    }
    .label_img {

        color: lightseagreen;
    }
</style>