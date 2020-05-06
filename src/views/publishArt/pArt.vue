<template>
    <div class="part">
        <div class="art_tit"><input v-model="tit" placeholder="文章标题">
            <input v-model="label" placeholder="标签请用-隔开">
        </div>
        <mavon-editor ref=md @imgAdd="$imgAdd"  v-model="handbook"/>
        <form  enctype="multipart/form-data"  method ='post'  action="http://127.0.0.1:200/image">
            <input type="file" name="file" id="file">
        </form>
        <input type="button" value="提交" class="putart" @click="put">
    </div>
</template>

<script>

    import {putimage,putArt} from "../../network/admin";

    export default {
        name: "pArt",
        methods:{
            put(){
                let $file = document.getElementById("file").files[0]
                let form = new FormData();
                form.append('image',$file);
                putimage({
                    url:'http://49.235.121.158:2000/image',
                    method:'post',
                    data:form,
                    headers:{ 'Content-Type': 'multipart/form-data' }
                }).then(res=>{
                    let art = {}
                    art.tit = this.tit
                    art.content = this.handbook
                    art.label = this.label.split('-')
                    art.head_img = res.data
                    console.log(art);
                    putArt(art).then(res=>{
                        let code  = parseInt(res)
                        if(code === 0)
                        {
                            alert("发表失败")
                        }
                        else{
                            alert("发表成功")
                        }
                    })
                })


            },
            $imgAdd(pos,$file){

                let form = new FormData();
                form.append('image',$file);
               putimage({
                    url:'http://49.235.121.158:2000/image',
                    method:'post',
                    data:form,
                    headers:{ 'Content-Type': 'multipart/form-data' }
                }).then(res=>{
                    this.$refs.md.$img2Url(pos,res.data)
                })


            },
            btnclick(){


            }
        },
        data(){
            return {
              handbook:'',
                tit:'',
                label:""
            }
        },created() {

        }
    }
</script>

<style scoped>
    div.part{
        width: 100%;

    }
.art_tit{
    margin: 0 auto;
    width: 100%;
    height: 80px;
}

    .art_tit input{
        margin-left: 20px;
        margin-top: 20px;
        width: 200px;
        height: 30px;
        border-bottom: 1px solid black;

    }
    input.putart{
        text-align: center;
        width: 70px;
        height: 50px;
        background-color:greenyellow ;
        margin-top: 30px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>