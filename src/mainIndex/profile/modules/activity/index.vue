<template>
  <div>
    <activity-unit 
      v-for="(unit,index) in units" 
      :key="index" 
      v-bind="unit" />
  </div>
</template>

<script>
import ActivityUnit from './ActivityUnit'
import { units } from './data.json'
export default {
  data() {
    return {
      units
    }
  },
  components: { ActivityUnit }
}
</script>