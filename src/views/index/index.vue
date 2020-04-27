<template>
    <div>

        <indexhead/>
        <motto/>
        <show-art/>
    </div>
    
</template>

<script>

    import indexhead from '@/components/conmon/indexhead/myhead'
    import motto from '@/components/content/motto/motto'
    import showArt from '@/components/content/showArt/showArt'
    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt
        },
        created() {

        }
    }
</script>

<style scoped>

</style>