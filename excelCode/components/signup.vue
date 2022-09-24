<template>
  <div class="main-cont" v-if="store.showComponent === true">
    <div class="signup-cont">
      <h1>Have an account?</h1>
      <button class="signup-btn" @click="handleLogin">Login</button>
    </div>
    <div class="cont">
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
          v-model="confirmPassword"
          class="input-form"
          placeholder="Confirm Password"
          name="Confirm-Password"
          required
        />
        <div type="password">show / hide</div>
        <select id="gradeForm" name="grade-level" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button class="submit-btn" type="submit">Signup</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const username = ref("");
const password = ref("");
const confirmPassword = ref("")
const email = ref("");
const store = useUserStore();
const router = useRouter();
const error = ref(null);
store.showComponent = true;

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

const handleLogin = () => {
  store.showComponent = false;
  console.log(store.showComponent);
};
</script>

<style scoped lang="scss">

.main-cont{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90vw;
    height: 70%;
}
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-left: 0.1rem solid;
}

.submit-btn {
  margin: 1rem;
  font-size: 1.3rem;
  height: 12.5%;
  width: 50%;
  border-radius: 0.5rem;
  color: white;
  background-color: black;
  transition: 0.25s ease all;
  &:hover {
    background-color: #fff;
    color: black;
    cursor: pointer;
  }
}

.form-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
}

#gradeForm {
  width: 27.5%;
  font-size: 1rem;
  height: 7.5%;

  justify-content: center;
  text-align: center;
  border-radius: 2rem;
  margin: 2rem;
  color: black;
  background-color: #e7e7ea;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.input-form {
  width: 100%;
  font-size: 0.8rem;
  height: 10%;
  padding: 1rem 0rem 1rem 1.3rem;
  border-radius: 0.7rem;
  margin: 1rem;
  color: black;
  background-color: #dadada;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    border: 2px solid;
  }
  &:focus {
    background-color: #fff;
    outline-color: black;
  }
}

.signup-btn {
  margin: 2.2rem;
  font-size: 1.4rem;
  height: 10%;
  width: 40%;
  border-radius: 0.5rem;
  color: white;
  background-color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #fff;
    color: black;
    cursor: pointer;
  }
}

.signup-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
//   border-right: 0.1rem solid;
  width: 100%;
}
</style>
