<template>
 <section id="navbar">
  <div class="nav-container">
   <div v-if="store.loggedIn === true">
    <NuxtLink class="route" to="/self-guided-home">Profile</NuxtLink>
   </div>
   <div v-else />
   <NuxtLink class="route" to="/">Education Home</NuxtLink>
   <NuxtLink class="route" to="/course">Course</NuxtLink>
   <div id="login">
    <div v-if="store.loggedIn === false">
     <NuxtLink class="login" to="/loginPage">Login/Signup</NuxtLink>
    </div>

    <NuxtLink to="/" class="login" v-else @click="handleSubmit"
     >LOGOUT</NuxtLink
    >
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const store = useUserStore();
const error = ref(null);

const handleSubmit = async () => {
 try {
  await store.logoutUser();
 } catch (err: any) {
  error.value = err.message;
  console.log(error);
 }
};
</script>

<style scoped lang="scss">
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
 align-items: center;
}

.route {
 text-decoration: none;
 font-size: 0.85rem;
 color: black;
 border: 1px solid #efeff0;
 border-radius: 12px;
 padding: 8px 18px;
 box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
 transition: ease-in-out 0.3s;
 &:hover {
  background-color: #e0e0e0;
  box-shadow: 0 5px 5px #e0e0e0;
  border: 1px solid #e0e0e0;
 }
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
