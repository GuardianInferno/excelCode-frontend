<template>
    <div class="signup-cont" v-if="store.showComponent === true">
        <h1>Have an account?</h1>
        <button class="signup-btn" @click="handleLogin">Login</button>
    </div>
    <div class="cont" v-if="store.showComponent === true">
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
   store.showComponent = true
   
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
    store.showComponent = false
    console.log(store.showComponent)
   }
   </script>
   
<style scoped>
.cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 50vw;
    border-left:0.1rem solid;
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
    font-size: 1rem;
    height: 10%;
    padding:1rem 0rem 1rem 1.3rem;
    border-radius: 2rem;
    margin: 2rem;
    color: black;
    background-color: #e7e7ea;
    border: 1px solid #ccc;
    box-sizing: border-box;
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

.signup-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    border-right: 0.1rem solid;
    width: 50%;

}
</style>


   