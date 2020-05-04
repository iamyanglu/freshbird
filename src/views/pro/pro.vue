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
                                data:['销量','产量']
                            },
                            xAxis: {
                                data: ["3-24","3-25","3-26","3-27"]
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'pie',
                                data: [5, 20, 36, 10, 10, 10]
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