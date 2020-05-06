<template>
    <div class="navbaruse">
        <nav-bar-f>
            <div slot="center">
                <nav-bar-c v-for="item in navList"  :path="item.link" :txt="item.txt"></nav-bar-c>
            </div>
        </nav-bar-f>
    </div>
</template>

<script>

    import navBarF from '@/components/conmon/navbar/navbarF'
    import navBarC from '@/components/conmon/navbar/navbarC'
    export default {
        name: "navbaruse",
        components:{ navBarC,navBarF},
        data(){
            return{
                navList:[{txt:'首页',link:'/index'},{txt:'关于',link:'/pro'},{txt:'其他',link:'/admin'}]
            }
        }
    }
</script>

<style scoped>
    .navbaruse{
        width: 100%;
        height: 49px;
    }

</style>