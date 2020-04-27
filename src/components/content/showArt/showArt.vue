<template>
    <div class="artItemF">
         <art-item/>
        <art-item/>
    </div>
</template>

<script>
    import artItem from  '@/components/conmon/art/artItem'
    export default {
        name: "showArt",
        components:{
            artItem
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