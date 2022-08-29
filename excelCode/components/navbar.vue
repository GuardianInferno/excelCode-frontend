<template>
  <section id="navbar">
    <div class="nav-container">
        <NuxtLink class="route" to="/">Self-Guided</NuxtLink>
        <NuxtLink class="route" to="/">Education Home</NuxtLink>
        <div id="login">
            <NuxtLink class="login" to="/">Login | Sign Up</NuxtLink>
        </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar{
    display: flex;
    flex-direction: row;
    /* left: 0;
    top: 0; */
    position: fixed;
    width: 88vw;
    align-items: center;
    /* justify-content: space-around; */
    border-bottom: 2px solid black;
    /* padding: 1rem 4rem; */
    margin-left: 3.5rem;
    /* margin-right: 3rem; */
    padding: 0.8rem;
    /* background: red; */
}

.nav-container{
    transform: translateX(150%);
    display: flex;
    width: 40%;
    justify-content: space-around;
    font-family: Arial, Helvetica, sans-serif;
}

.route{
    text-decoration: none;
    font-size: 0.75rem;
    color: black;
    border: 1px solid #EFEFF0;
    border-radius: 12px;
    padding: 6.5px 15px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.20);

}

#login{
    margin-top: 0.25rem;
}

.login{
    font-size: 0.9rem;
    color: white;
    background-color: #0F2337;
    text-decoration: none;
    padding: 15px 15px;
    border-radius: 13px;
}
</style>