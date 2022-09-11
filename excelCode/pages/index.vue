<template>
  <!-- <section class="container">
  <div class="container-top">
   <div class="module">
    <div id="shape" class="module__shape">
     <div class="module__shape-shadow-1"></div>
     <div class="module__shape-shadow-2"></div>
     <div class="module__shape-shadow-3"></div>

     <div class="module__shape-rec1"></div>
     <div class="module__shape-rec2"></div>
     <div class="module__shape-rec3"></div>
     <div class="module__shape-rec4"></div>

     <div class="module__shape-hover1"></div>
     <div class="module__shape-hover2"></div>
     <div class="module__shape-hover3"></div>
     <div class="module__shape-hover4"></div>
    </div>
   </div>
   <div class="module">
    <div id="shape" class="module__shape">
     <div class="module__shape-shadow-1"></div>
     <div class="module__shape-shadow-2"></div>
     <div class="module__shape-shadow-3"></div>

     <div class="module__shape-rec1"></div>
     <div class="module__shape-rec2"></div>
     <div class="module__shape-rec3"></div>
     <div class="module__shape-rec4"></div>

     <div class="module__shape-hover1"></div>
     <div class="module__shape-hover2"></div>
     <div class="module__shape-hover3"></div>
     <div class="module__shape-hover4"></div>
    </div>
   </div>
  </div>
  <div class="container-bottom">
   <div class="module">
    <div id="shape" class="module__shape">
     <div class="module__shape-shadow-1"></div>
     <div class="module__shape-shadow-2"></div>
     <div class="module__shape-shadow-3"></div>

     <div class="module__shape-rec1"></div>
     <div class="module__shape-rec2"></div>
     <div class="module__shape-rec3"></div>
     <div class="module__shape-rec4"></div>

     <div class="module__shape-hover1"></div>
     <div class="module__shape-hover2"></div>
     <div class="module__shape-hover3"></div>
     <div class="module__shape-hover4"></div>
    </div>
   </div>
   <div class="module">
    <div id="shape" class="module__shape">
     <div class="module__shape-shadow-1"></div>
     <div class="module__shape-shadow-2"></div>
     <div class="module__shape-shadow-3"></div>

     <div class="module__shape-rec1"></div>
     <div class="module__shape-rec2"></div>
     <div class="module__shape-rec3"></div>
     <div class="module__shape-rec4"></div>

     <div class="module__shape-hover1"></div>
     <div class="module__shape-hover2"></div>
     <div class="module__shape-hover3"></div>
     <div class="module__shape-hover4"></div>
    </div>
   </div>
  </div>
 </section> -->
  <div class="main-container">
    <section class="overhead-container"></section>
    <section class="intro-section">
      <div class="typewriter">
        <h1>Welcome to ibis...</h1>
      </div>
    </section>
    <section class="second-container">
      <div class="second-text">
        <h1 class="mission-line-1">
          Re-defining Computer Science Education for Middle Schoolers
        </h1>
        <h2 class="mission-line-2">One Classroom at a Time</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  background-color: #445464;
  width: 100vw;
  height: 92vh;
}

.overhead-container {
  background-color: #445464;
  width: 100vw;
  height: 10vh;
}

.intro-section {
  background-color: #445464;
  width: 65vw;
  height: 20vh;
}

.typewriter h1 {
  padding-left: 7.5vw;
  font-size: 4rem;
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15rem; /* Adjust as needed */
  animation: typing 4s steps(20, end), blink-caret 1s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.second-text {
  animation: swipe 6s;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

@keyframes swipe {
  0% {
    transform: translate(110vw);
  }
  66% {
    transform: translate(105vw);
  }
  100% {
    transform: translate(0vw);
  }
}

.mission-line-1 {
  padding-left: 10vw;
  font-size: 2.35rem;
}

.mission-line-2 {
  padding-left: 12.5vw;
  font-size: 2.25rem;
}
/* .container {
 width: 100vw;
 height: 100vh;
}
.container-top {
 width: 100vw;
 height: 50vh;
 background-color: #e3f2fd; 
 display: flex;
 justify-content: space-evenly;
 align-items: center;
}

.container-bottom {
 width: 100vw;
 height: 50vh;
 /* background-color: #e3f2fd; 
 display: flex;
 justify-content: space-evenly;
 align-items: center;
}

.module {
 width: 30rem;
 height: 30rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.module__shape {
 position: relative;
 width: 30rem;
 height: 30rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.module__shape:hover {
 transform: translateY(-5px);
 transition: transform 0.5s;
}
.module__shape:hover + .module__content {
 transform: translateY(-7px);
 transition: transform 0.2s;
}
.module__shape:hover > div {
 cursor: pointer;
 background-color: #b6deb8;
}
.module__shape:hover > .module__shape-shadow-1 {
 box-shadow: 0px 8px 8px 0px #b3dcfa;
}
.module__shape:hover > .module__shape-shadow-2 {
 box-shadow: 0px -8px 8px 0px #b3dcfa;
}
.module__shape:hover > .module__shape-shadow-3 {
 box-shadow: 0px 8px 8px 0px #b3dcfa;
}
.module__shape-shadow-1 {
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 transform: rotate(-45deg);
 box-shadow: 0px 8px 8px 0px #cbe7fb;
}
.module__shape-shadow-2 {
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 transform: rotate(90deg);
 box-shadow: 0px -8px 8px 0px #cbe7fb;
}
.module__shape-shadow-3 {
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 box-shadow: 0px 8px 8px 0px #cbe7fb;
}
.module__shape-rec1 {
 transform: rotate(45deg);
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 border-top: 1px solid #a5d6a7;
 border-bottom: 1px solid #a5d6a7;
 background-color: #c8e6c9;
}
.module__shape-rec2 {
 transform: rotate(-45deg);
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 border-top: 1px solid #a5d6a7;
 border-bottom: 1px solid #a5d6a7;
 background-color: #c8e6c9;
}
.module__shape-rec3 {
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 border-top: 1px solid #a5d6a7;
 border-bottom: 1px solid #a5d6a7;
 background-color: #c8e6c9;
}
.module__shape-rec4 {
 transform: rotate(90deg);
 position: absolute;
 width: 12.5rem;
 height: 30rem;
 border-radius: 4px;
 border-top: 1px solid #a5d6a7;
 border-bottom: 1px solid #a5d6a7;
 background-color: #c8e6c9;
} */
</style>
