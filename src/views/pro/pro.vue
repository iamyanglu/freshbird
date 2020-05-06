<template>
    <div>
        <div id="myEch">
            <div class="pro_box">
                <div class="pro_tit">
                    #关于
                </div>
                <div class="pro_content">
                    想做一个程序员，喜欢coding，喜欢去连接网络世界，做程序员对我来说就好像一个造物者一样，我们就好像上帝的一只手，去创造
                    这个世界，与现实世界对比就好像拥有超能力一样,真的很喜欢这个世界了。

                </div>
            </div>
            <div class="pro_box">
                <div class="pro_tit">
                    #目的
                </div>
                <div class="pro_content">
                   因为刚刚学完Vue的基础，刚好夯实一下，然后作为一名前端的程序员在初期怎么能没有一个博客。（不然我怎么在同学面前装逼）

                </div>
            </div>
        </div>



    </div>
</template>

<script>


    export default {
        name: "pro",
        components:{

        },
        methods:{


                    },
        created() {
            this.$emit('loaded')
        }
    }
</script>

<style scoped>
#myEch{
  width: 100%;
    height: 100%;

}
    .pro_box{
        margin: 20px auto;
        width: 60%;
        min-width: 600px;

    }
    .pro_tit{
        width: 100%;
        padding: 20px;
        font-size: 25px;
    }
    .pro_content{
        letter-spacing: 1px;
        font-size: 16px;
        font-size: 16px;
        padding: 20px;
        width: 80%;

    }


</style>