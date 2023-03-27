<script setup>
import {ref} from 'vue'
import {websiteFiling,websiteFilingLink,policeFiling,policeFilingLink} from '../../../setting'
</script>

<template>
  <div class="filing-container">
    <a :href="websiteFilingLink">{{ websiteFiling }}</a>
    <a class="police-filing" target="_blank" :href="policeFilingLink">
      <img src="@/assets/filing.png" alt=""/>
      <p>{{ policeFiling }}</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
.filing-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 12px;
    color: whitesmoke;
  }

  .police-filing {
    margin: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
