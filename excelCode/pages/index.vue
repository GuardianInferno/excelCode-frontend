<template>
 <section class="container">
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
 </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
 width: 100vw;
 height: 100vh;
}
.container-top {
 width: 100vw;
 height: 50vh;
 /* background-color: #e3f2fd; */
 display: flex;
 justify-content: space-evenly;
 align-items: center;
}

.container-bottom {
 width: 100vw;
 height: 50vh;
 /* background-color: #e3f2fd; */
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
}
</style>
