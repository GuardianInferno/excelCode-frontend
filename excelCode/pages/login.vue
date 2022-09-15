<template>
 <div class="container">
  <div class="login-cont">
   <form
    action=""
    method="post"
    class="form-cont"
    @submit.prevent="handleSubmit"
   >
    <input
     class="input-form"
     type="text"
     placeholder="Enter Username"
     name="username"
     v-model="username"
     required
    />

    <input
     class="input-form"
     type="password"
     placeholder="Enter Password"
     name="password"
     v-model="password"
     required
    />

    <button class="submit-btn" type="submit">Log In</button>
   </form>
  </div>
  <div class="signup-cont">
   <h1>Dont have an account?</h1>
   <NuxtLink class="signup-btn" to="/signup">Signup</NuxtLink>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const username = ref("");
const password = ref("");
const router = useRouter();
const store = useUserStore();
const error = ref(null);

const handleSubmit = async () => {
 try {
  await store.login(username.value, password.value);

  if ((store.$state.redirect = true)) {
   router.push({ path: "/" });
  }
 } catch (err: any) {
  error.value = err.message;
  console.log(error);
 }
};
</script>

<style scoped>
.container {
 height: 95vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
}

.form-cont {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100%;
}
.input-form {
 width: 50%;
 height: 10%;
 padding-left: 1.3rem;
 border-radius: 2rem;
 margin: 2rem;
 color: black;
 background-color: #e7e7ea;
 border: 1px solid #ccc;
 box-sizing: border-box;
}

.submit-btn {
 margin: 2rem;
 font-size: 2rem;
 height: 8%;
 width: 20%;
 border-radius: 2rem;
 color: white;
 background-color: black;
}

.signup-btn {
 margin: 2rem;
 font-size: 2rem;
 height: 8%;
 width: 40%;
 border-radius: 2rem;
 color: white;
 background-color: black;
 text-decoration: none;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}

.login-cont {
 height: 70%;
 width: 50%;
 border-right: 0.1rem solid;
}

.signup-cont {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 70%;
 border-left: 0.1rem solid;
 width: 50%;
}
</style>
