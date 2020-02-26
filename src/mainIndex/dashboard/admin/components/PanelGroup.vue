<template>
    <div>
        <el-row :gutter="32" style="padding:20px;">
            <el-col 
                v-for="(card, index) in cards"
                :key="index"
                :xs="24" :sm="12" :lg="6" >
                <ve-icon-card 
                    v-bind="card"
                    :style="card.style"
                    @icon-click="handleSetLineChartData(card.id)">
                </ve-icon-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'WorkNotice',
    data() {
        return {
            cards: [
                {id:"newVisitis", title:"New Visits", icon:"el-icon-phone",iconWrapper:"work-notice-icon1", count:{startVal: 0 , endVal: 102400, duration:2600}, style:{}, titleStyle:{}, numStyle:{}},
                {id:"messages", title:"Messages", icon:"el-icon-user-solid",iconWrapper:"work-notice-icon2", count:{startVal: 0 , endVal: 81212, duration:3000}},
                {id:"purchases", title:"Purchases", icon:"el-icon-s-tools",iconWrapper:"work-notice-icon3", count:{startVal: 0 , endVal: 9280, duration:3200}},
                {id:"shoppings", title:"Shoppings", icon:"el-icon-star-on",iconWrapper:"work-notice-icon4", count:{startVal: 0 , endVal: 13600, duration:3600}},
            ]
        }
    },
    methods: {
        handleSetLineChartData(type) {
            this.$emit('handleSetLineChartData', type)
        }
    }
}
</script>

<style lang="scss">
    .work-notice-icon1 {
        color: #36a3f7; 
        &:hover {
            color: #fff;
            background: #36a3f7;
        }
    }

    .work-notice-icon2 {
        color: #f4516c; 
        &:hover {
            color: #fff;
            background: #f4516c;
        }
    }

    .work-notice-icon3 {
        color: #e67e22; 
        &:hover {
            color: #fff;
            background: #e67e22;
        }
    }

    .work-notice-icon4 {
        color: #34bfa3; 
        &:hover {
            color: #fff;
            background: #34bfa3;
        }
    }
</style>



