<template>
    <div>
        <div id="myEch">


        </div>
    </div>
</template>

<script>


    export default {
        name: "pro",
        components:{

        },
        methods:{
                    intiPro(){
                        let echar = this.$echarts.init(document.getElementById("myEch"))
                        let option = {
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            legend: {

                            },
                            xAxis: {},
                            yAxis: {},
                            series: [{
                                type: 'pie',
                                radius:100,
                                data: [{name:'访问人数',value:'50'},
                                    {name:'点赞人数',value:'40'},
                                    {name:'白嫖人数',value:'80'},]
                            }]
                        };
                     echar.setOption(option)

                    }
        },
        mounted() {
            this.intiPro()

    }}
</script>

<style scoped>
#myEch{
    width: 800px;
    height: 700px;
}
</style>