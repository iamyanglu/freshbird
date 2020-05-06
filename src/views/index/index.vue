<template>
    <div>

        <indexhead/>
        <motto/>

        <show-art :list="list.artlist" />


        <my-button   v-if='isButton' @getmoreart="getArt"  :totalNum="totalart" :artNum="nowartNum"></my-button>

    </div>
    
</template>

<script>

    import indexhead from '@/components/conmon/indexhead/myhead'
    import motto from '@/components/content/motto/motto'
    import showArt from '@/components/content/showArt/showArt'
    import {getart,total} from "../../network/admin";
    import myButton from '@/components/conmon/sButton/sButton'


    export default {
        name: "index",
        components:{
          indexhead,
            motto,
            showArt,
            myButton,

        },
        data(){
            return{
                list:{page:0,artlist:[]},
                isLoad:true,
                totalart:0,
                isButton:false
            }
        },
        computed:{
            nowartNum(){
                return this.list.artlist.length
            }
        },
        methods:{
            getArt(){
                getart(this.list.page).then(res=>{

                    window.setTimeout(()=>{
                        this.list.page++
                        this.list.artlist.push(...res.data)

                        this.$emit('loaded')

                        this.isButton=true
                    },1000)
                    this.gettotal()
                })

            },
            gettotal(){
                total().then(re=>{

                    this.totalart = parseInt(re.data)
                })



            }

        },
        created() {
            this.getArt()


        },
        updated() {
            console.log(this.list.artlist);
        }
    }
</script>

<style scoped>

</style>