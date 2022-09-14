<template>
 <div class="cont">
  <h1 class="header">Welcome</h1>
  <form
   @submit.prevent="handleSubmit"
   action=""
   method="post"
   class="form-cont"
  >
   <input
    class="input-form"
    type="text"
    placeholder="Enter Email Address"
    name="email"
    v-model="email"
   />
   <input
    class="input-form"
    type="text"
    placeholder="Enter Username"
    name="username"
    v-model="username"
    required
   />
   <input
    type="password"
    v-model="password"
    class="input-form"
    placeholder="Enter Password"
    name="password"
    required
   />
   <div type="password">show / hide</div>
   <input
    type="password"
    v-model="password"
    class="input-form"
    placeholder="Confirm Password"
    name="Confirm-Password"
    required
   />
   <div type="password">show / hide</div>
   <select id="gradeForm" name="grade-level" required>
    <option value="5">Grade 5</option>
    <option value="6">Grade 6</option>
    <option value="7">Grade 7</option>
    <option value="8">Grade 8</option>
    <option value="9">Grade 9</option>
    <option value="10">Grade 10</option>
    <option value="11">Grade 11</option>
    <option value="12">Grade 12</option>
   </select>
   <button class="submit-btn" type="submit">Signup</button>
  </form>
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const username = ref("");
const password = ref("");
const email = ref("");
const store = useUserStore();
const router = useRouter();
const error = ref(null);

const handleSubmit = async () => {
 try {
  await store.signup(username.value, password.value, email.value);
  if ((store.$state.redirect = true)) {
   router.push({ path: "/" });
  }
 } catch (err: any) {
  error.value = err.message;
  console.error(error);
 }
};
</script>

<style scoped>
.header {
 font-size: 5rem;
}
.cont {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 95vh;
 width: 100vw;
}

.submit-btn {
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

.form-cont {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 70%;
 width: 70%;
}

#gradeForm {
 width: 20%;
 font-size: 1.5rem;
 height: 10%;
 padding-left: 1.3rem;
 border-radius: 2rem;
 margin: 2rem;
 color: black;
 background-color: #e7e7ea;
 border: 1px solid #ccc;
 box-sizing: border-box;
}
.input-form {
 width: 50%;
 font-size: 1.5rem;
 height: 10%;
 padding-left: 1.3rem;
 border-radius: 2rem;
 margin: 2rem;
 color: black;
 background-color: #e7e7ea;
 border: 1px solid #ccc;
 box-sizing: border-box;
}
</style>
