<template>
 <section id="navbar">
  <div class="nav-container">
   <NuxtLink class="route" to="/self-guided-home"
    >Self-Guided</NuxtLink
   >
   <NuxtLink class="route" to="/">Education Home</NuxtLink>
   <div id="login">
    <NuxtLink class="login" to="/login">{{ loginName }}</NuxtLink>
   </div>
  </div>
 </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 data() {
  return {
   loginName: "Login | Sign Up",
  };
 },

 //  watch: {                          // change the name later
 //   $route(to, from) {
 //    if (this.route === "login") {
 //     console.log(this.route);
 //     this.loginName = "Home";
 //    } else {
 //     console.log(this.route);
 //     this.loginName = "Login | Sign Up";
 //    }
 //   },
 //  },
});
</script>

<style scoped>
#navbar {
 display: flex;
 flex-direction: row;
 /* left: 0;
    top: 0; */

 width: 88vw;
 align-items: center;
 /* justify-content: space-around; */
 border-bottom: 2px solid black;
 /* padding: 1rem 4rem; */
 margin-left: 6vw;
 /* margin-right: 3rem; */
 padding: 0.8rem;
 /* background: red; */
}

.nav-container {
 transform: translateX(150%);
 display: flex;
 width: 40%;
 justify-content: space-around;
 font-family: Arial, Helvetica, sans-serif;
 margin: 0.5rem;
}

.route {
 text-decoration: none;
 font-size: 0.75rem;
 color: black;
 border: 1px solid #efeff0;
 border-radius: 12px;
 padding: 6.5px 15px;
 box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

#login {
 margin-top: 0.25rem;
}

.login {
 font-size: 0.9rem;
 color: white;
 background-color: #0f2337;
 text-decoration: none;
 padding: 15px 15px;
 border-radius: 13px;
}
</style>
