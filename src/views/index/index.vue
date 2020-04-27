<template>
    <div>

        <indexhead/>
        <motto/>
        <show-art :list="list.artlist" />
        <my-button @getmoreart="getArt"></my-button>
    </div>
    
</template>

<script>

    import indexhead from '@/components/conmon/indexhead/myhead'
    import motto from '@/components/content/motto/motto'
    import showArt from '@/components/content/showArt/showArt'
    import {getart} from "../../network/admin";
    import myButton from '@/components/conmon/sButton/sButton'

    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt,
            myButton
        },
        data(){
            return{
                list:{page:0,artlist:[]}
            }
        },
        methods:{
            getArt(){
                getart(this.list.page).then(res=>{
                   this.list.page++
                    this.list.artlist.push(...res.data)


                })

            }

        },
        created() {
            this.getArt()

        }
    }
</script>

<style scoped>

</style>