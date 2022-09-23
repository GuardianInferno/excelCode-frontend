<template>
    <section id="navbar">
        <div class="nav-container">
            <NuxtLink class="route" to="/">Home</NuxtLink>
            <NuxtLink class="route" to="/course">Course</NuxtLink>

            <div v-if="store.loggedIn === true">
                <NuxtLink class="route" to="/self-guided-home">Profile</NuxtLink>
            </div>
            <div v-else />

            <div v-if="store.loggedIn === false">
                <NuxtLink class="login" to="/loginPage">Login/Signup</NuxtLink>
            </div>
            <NuxtLink to="/" class="login" v-else @click="handleSubmit">Logout</NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

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
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
}

.route {
 display: flex;
 justify-content: center;
 width: 6rem;
 text-decoration: none;
 font-size: 0.85rem;
 margin:0 2.4rem 0 2.4rem;
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

.login {
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  width:9rem;
  color: white;
  background-color: #0f2337;
  text-decoration: none;
  padding: 15px;
  margin: 0 0 0 2.4rem;
  border-radius: 12px;
}
</style>
