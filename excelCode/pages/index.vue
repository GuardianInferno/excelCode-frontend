<template>
  <div class="home">
    <section id="banner">
      <div class="banner-text">
        <h1 class="name">ibis</h1>
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
      <div class="cards">
        <div class="row-1">
          <div class="card">
            <img class="img" src="../assets/ibis.jpg" alt="">
            <h1 class="card-header">This is the card header</h1>
            <p class="content">         
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat.</p>
            <button class="btn">Click me</button>
          </div>
        </div>
        <div class="row-2">
          <div class="card">
            <img class="img" src="../assets/ibis.jpg" alt="">
            <h1 class="card-header">This is the card header</h1>
            <p class="content">         
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat.</p>
            <button class="btn">Click me</button>
          </div>
          <div class="card">
            <img class="img" src="../assets/ibis.jpg" alt="">
            <h1 class="card-header">This is the card header</h1>
            <p class="content">         
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat.</p>
            <button class="btn">Click me</button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.name {
  overflow: hidden; 
  border-right: .15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto;
  animation: 
    typing 3s steps(45, end),
    blink-caret .75s step-end infinite;

    /* The typing effect */
  @keyframes typing {
    from { width: 0% }
    to { width: 100%}
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
}




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
  filter: grayscale(0.85);
}

.banner-text {
  text-align: center;
  color: white;
  padding-top: 170px;
  width: max-content;
  margin: 0 auto;
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
  flex-direction: column;
  height: 90vh;
  align-items: center;
  /* justify-content: center; */
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

.cards{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

.card{
 /* font-size: 0.85rem; */
 /* color: black; */
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 20vw;
 border: 1px solid #efeff0;
 border-radius: 12px;
 padding: 1rem 2rem;
 box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.img{
  height: 5rem;
}

.card-header{
  margin: 0.5rem;
  margin-top: 0.7rem;
  text-align: center;
}
.row-2{
  transform: translateY(-90%);
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
}

.btn{
  margin: 1rem;
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: white;
  background: blue;
  border: 0.5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
  cursor: pointer;
}
</style>