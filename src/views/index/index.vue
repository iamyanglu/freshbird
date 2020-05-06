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

            getArt(){ // 拿到6篇文章
                getart(this.list.page).then(res=>{

                        //当请求到相同数据
                    this.list.page+=1;
                    this.list.artlist.push(...res.data)
                    this.$emit('loaded')
                    this.isButton=true
                    this.gettotal()
                })

            },
            //拿到文章总数做 按钮显示判断
            gettotal(){
                total().then(re=>{
                    this.totalart = parseInt(re.data)
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