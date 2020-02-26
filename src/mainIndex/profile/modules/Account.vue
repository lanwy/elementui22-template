<template>
    <div>
        <ve-form 
            :modelForm="modelForm" 
            :attrs="attrs" 
            label-width="100px"
            ref="formlw">
        </ve-form>
    </div>
</template>
<script>
export default {
    name:'FormDemo',
    data() {
        return {
            modelForm:{
                name:'', email:'', role:'', tel:''
            },
            attrs:[
                {prop:"name", label:"Name"},
                {prop:"email", label:"Email"},
                {prop:"role", label:"Role"},
                {prop:"tel", label:"Tel"},
            ]
        };
    }
}
</script>
