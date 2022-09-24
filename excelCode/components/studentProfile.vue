<template>
 <div class="outer-cont">
  <div class="achievement-header-cont">
   <div class="achievement-header">
    <div class="octagon-cont">
     <div class="octagonWrap">
      <div class="octagon"></div>
     </div>
    </div>
    <div class="user-info">
     <h1 v-if="store.userData"> Welcome back, {{store.userData.username}}</h1>
     <h1 v-else>Not logged in</h1>

     <h2>Grade 12</h2>
     <div class="achievement-cont">
      <span class="dot"></span>
     </div>
    </div>
   </div>
  </div>

  <div class="progress-cont">
   <div class="progress-header-cont">
    <h2 class="progress-header">Intro to Web Dev</h2>
   </div>
   <div>
    <div class="course-progress-cont">
     <div class="dot"></div>
     <div class="course-name-cont">
      <h3></h3>
     </div>
     <h3 class="spacing">%</h3>
     <div class="progress-bar-cont">
      <div
       class="progress-bar"
       :style="{
        width: `%`,
       }"
      ></div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
    import {useUserStore} from '@/stores/user'
    const store = useUserStore()

</script>

<style scoped>
* {
 font-family: Arial, Helvetica, sans-serif;
}
.outer-cont {
 height: 100vh;
 width: 100vw;
}

.spacing {
 width: 5%;
 text-align: center;
}
.progress-bar-cont {
 width: 60%;
 height: 35%;
 border-radius: 1rem;
 background-color: #d9d9d9;
}

.progress-bar {
 border-radius: 1rem;
 background-color: #8b86ac;
 height: 100%;
}
.course-name-cont {
 display: flex;
 justify-content: center;
 align-items: center;

 width: 15%;
 height: 4vh;
 border-radius: 0.6rem;
 box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
 margin: 1rem;
}

.progress-header {
 text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
}

.course-progress-cont {
 display: flex;
 font-size: 1.5rem;
 align-items: center;
 width: 80vw;
 height: 15%;
 margin: 2rem;
}
.progress-header-cont {
 height: 10%;
 width: 80%;

 font-size: 1.5rem;
 display: flex;
 align-items: center;
}
.user-info {
 height: 100%;
 display: flex;
 justify-content: space-evenly;
 flex-direction: column;
}

.achievement-cont {
 width: 100%;
 display: flex;
}
.dot {
 margin-right: 1rem;
 height: 4rem;
 width: 4rem;
 background-color: #8b86ac;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
}
/* Profile Picture */

.octagon-cont {
 height: 100%;
 width: 25%;
 display: flex;
 justify-content: center;
 align-items: center;
}
.octagonWrap {
 width: 250px;
 height: 250px;
 float: left;
 position: relative;
 overflow: hidden;
}
.octagon {
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 overflow: hidden;
 transform: rotate(45deg);
 background: #a93838;
}
.octagon:before {
 position: absolute;
 /* There needs to be a negative value here to cancel
     * out the width of the border. It's currently -3px,
     * but if the border were 5px, then it'd be -5px.
     */
 top: -3px;
 right: -3px;
 bottom: -3px;
 left: -3px;
 transform: rotate(45deg);
 content: "";
 border: inherit;
}
.achievement-header {
 display: flex;

 align-items: center;

 height: 60%;
 width: 80%;
 border-radius: 2rem;
 box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.achievement-header-cont {
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 40%;
}

.progress-cont {
 width: 100vw;
 height: 60vh;

 display: flex;
 align-items: center;
 flex-direction: column;
}
</style>
