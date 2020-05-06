<template>
    <div class="artItemF">


            <art-item v-for="(item,key) in list" :item="item" :key="item._id">
                <label-item v-for="re in item.label" :txt="re"></label-item>
            </art-item>











    </div>
</template>

<script>
    import artItem from  '@/components/conmon/art/artItem'
    import labelItem from  '@/components/conmon/labelF/mylabel'

    export default {
        name: "showArt",
        props:['list'],
        components:{
            artItem,
            labelItem
        },

        methods:{

        },
        created() {
            console.log("creatred");
        },
        destroyed() {
            console.log('destroyed');
        }
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