<template>
    <div>
        <mavon-editor


                :toolbarsFlag="false" :subfield="false" defaultOpen="preview" v-model="art">

        </mavon-editor>
        <div class="bot" v-show="art.length > 1">
            <div class="bot_icon"><img v-if="isClick" @click="addfalous" src="../../assets/img/falous.png" height="200" width="200"/>


                <img  v-else src="../../assets/img/falous_on.png" height="200" width="200"/></div>
        </div>


    </div>
</template>

<script>
    import {getartByid,addSuport,addViews} from "../../network/admin";


    export default {
        name: "detail",
        data(){
            return{
                id:"",
                art:"",
                isClick:true
            }
        },
        methods:{
            addfalous(){
                this.isClick=!this.isClick
                addViews(this.id)

            }

        },
        created(){
            let id = this.$route.params.id;
            this.id = id
            getartByid(id).then(res=>{
                this.art = res.data[0].content

            })
            addSuport(id)

        }


    }

</script>

<style scoped>
.bot{
    width: 100%;
    height: 100px;

}
    .bot .bot_icon{
        margin: 0 auto;
        width: 60px;
        height: 60px;
        background-color: #fff;
    }
.bot .bot_icon img{
    width: 60px;
    height: 60px;
}
</style>