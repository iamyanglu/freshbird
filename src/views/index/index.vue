<template>
    <div>
<load-ing v-if="isLoad"></load-ing>
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
    import loadIng from  '@/views/loading/loading'

    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt,
            myButton,
            loadIng
        },
        data(){
            return{
                list:{page:0,artlist:[]},
                isLoad:true
            }
        },
        methods:{
            getArt(){
                getart(this.list.page).then(res=>{

                    window.setTimeout(()=>{
                        this.list.page++
                        this.list.artlist.push(...res.data)
                        this.isLoad=false
                    },1000)

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