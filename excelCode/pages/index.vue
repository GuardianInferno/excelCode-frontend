<template>
  <div class="home">
    <section id="banner">
      <div class="banner-text">
        <h1 class="name">We are the best</h1>
        <p class="description">I dont know what to put for thes efiels </p>
        <div class="banner-btn">
          <a href="#"><span></span><b>Blah blah blah</b></a>
          <a href="#"><span></span><b>Blah blah blah</b></a>
        </div>
      </div>
    </section>
    <section class="info">
      <div class="header-wrapper">
        <h1 class="header">
          This is the header
        </h1>
        <span class="underline"></span>
        <p class="info-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
             in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// import gsap from "gsap";

export default {
  // name: "home",
  // mounted() {
  //   gsap
  //     .timeline({ defaults: { duration: 1 } })
  //     .from(".name", { x: -60, opacity: 0, ease: "power2.in" })
  //     .from(".description", { x: 60, opacity: 0, ease: "power2.in" })
  //     .from(".banner-btn", { opacity: 0, ease: "power3.out" });
  // },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

#banner {
  /* display: flex;
    flex-direction: column;
    align-items: center; */
  background: 
    url(../assets/ibis.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
}

.banner-text {
  text-align: center;
  color: white;
  padding-top: 170px;
}

.banner-text h1 {
  font-size: 80px;
  font-family: "Kaushan Script";
}

.banner-text p {
  font-size: 20px;
  font-style: italic;
}

.banner-btn {
  margin: 76px auto;
}

.banner-btn a {
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: #fff;
  border: 0.5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}

.banner-btn a span {
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}

.banner-btn a:hover span {
  width: 100%;
}

.banner-btn a:hover {
  color: #000;
}

.description {
  padding-top: 1rem;
}

.info{
  display: flex;
  height: 100vh;
  justify-content: center;
  margin-top: 1.75rem;
  /* width: 90vw; */

}

.header-wrapper{
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  align-items: center;
}

.underline{
  display: flex;
  width: 50px;
  height: 4px;
  background-color: #0f2337;
  margin: 5px;
  border-radius: 5px;
  margin: 1rem;


}
</style>