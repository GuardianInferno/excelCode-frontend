<template>
  <div class="main-cont" v-if="store.showComponent === false">
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
          placeholder="Username"
          name="username"
          v-model="username"
          required
        />

        <input
          class="input-form"
          type="password"
          placeholder="Password"
          name="password"
          v-model="password"
          required
        />

        <button class="submit-btn" type="submit">Log In</button>
      </form>
    </div>
    <div class="signup-cont">
      <h1>Don't have an account?</h1>
      <button class="signup-btn" @click="handleSignup">Signup</button>
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
store.showComponent = false;

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

const handleSignup = () => {
  store.showComponent = true;
  console.log(store.showComponent);
};
</script>

<style scoped lang="scss">
body {
  font-family: "Montserrat";
}

.main-cont{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90vw;
    height: 70%;
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
  border-radius: 0.7rem;
  margin: 2rem;
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

.submit-btn {
  margin: 2rem;
  font-size: 1.3rem;
  height: 9%;
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

.login-cont {
  height: 100%;
  width: 50%;
//   border-right: 0.1rem solid;
}

.signup-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 0.1rem solid;
  width: 50%;
}
</style>
