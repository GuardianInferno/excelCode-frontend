<template>
 <div class="container">
    <signup />
    <login />
    

  
 </div>
</template>

<script setup lang="ts">
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import {useUserStore} from '../stores/user'

const store = useUserStore()

</script>

<style scoped>
.container {
 height: 94vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
}


</style>
