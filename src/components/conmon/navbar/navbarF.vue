<template>
    <div id="navbar">

        <div class="nav_left"><slot name="left"></slot></div>
        <div class="nav_center"><slot name="center"></slot></div>
        <div class="nav_right"><slot name="right"></slot></div>
    </div>
    
</template>

<script>
    export default {
        name: "navbarF"
    }
</script>

<style scoped>
#navbar{

    width: 100%;
    height: 49px;
    display: flex;
    background-color: rgba(255,255,255,.1);

    box-shadow: 1px 1px #888888;
    transition: all 0.5s;


}
#navbar:hover{
    background-color: #eeeeee;}
.nav_center{
    font-size: 16px;
    flex: 4;
    margin-left: auto;

    display: flex;
    justify-content: flex-end;

}
    .nav_left{
        width: 10%;
        flex: 1;
    }
    .nav_right{
        flex: 1;
        width: 10%;
    }
</style>