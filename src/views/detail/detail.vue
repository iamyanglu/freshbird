<template>
    <div>
        <mavon-editor


                :toolbarsFlag="false" :subfield="false" defaultOpen="preview" v-model="art"
        ></mavon-editor>

    </div>
</template>

<script>
    import {getartByid} from "../../network/admin";

    export default {
        name: "detail",
        data(){
            return{
                art:""
            }
        },created(){
            let id = this.$route.params.id;
            getartByid(id).then(res=>{
                this.art = res.data[0].content

            })

        }


    }

</script>

<style scoped>

</style>