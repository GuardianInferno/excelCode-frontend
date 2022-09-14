<template>
 <section id="navbar">
  <div class="nav-container">
   <NuxtLink class="route" to="/self-guided-home"
    >Self-Guided</NuxtLink
   >
   <NuxtLink class="route" to="/">Education Home</NuxtLink>
   <div id="login">
    <NuxtLink class="login" to="/login">Login/Signup</NuxtLink>
    <button class="login" @click="handleSubmit">LOGOUT</button>
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

  //   if ((store.$state.redirect = true)) {
  //    router.push({ path: "/" });
  //   }
 } catch (err: any) {
  error.value = err.message;
  console.log(error);
 }
};
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
