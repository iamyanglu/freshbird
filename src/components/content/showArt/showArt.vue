<template>
    <div class="artItemF">
<art-item v-for="(item,key) in list" :item="item" :key="item._id"></art-item>


    </div>
</template>

<script>
    import artItem from  '@/components/conmon/art/artItem'

    export default {
        name: "showArt",
        props:['list'],
        components:{
            artItem
        },

        methods:{

        },


    }
</script>

<style scoped>
.artItemF{

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>