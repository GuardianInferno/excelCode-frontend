<template>
  <section class="home">
    <div class="row-1">
      <!-- <div class="hexagon">
        <div class="sub-header"></div>
        <div class="explore"></div>
      </div> -->
      <span class="hex">&#x2B22;</span>
      <div class="hex-wrapper">
          <div class="hex-header">{{ numCourses }} New Courses</div>
        <button class="explore">Explore</button>
      </div>
      <span class="hex">&#x2B22;</span>
      <!-- <div class="hexagon">
                <div class="sub-header"></div>
                <div class="explore"></div>
            </div> -->
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      numCourses: 4
    }
  }
};
</script>

<style scoped>
.home {
  height: 94vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #fbb12f; */
}

/* .hexagon {
  height: 0;
  width: 150px;
  border-top: 150px solid #8fac86;
  border-right: 100px solid transparent;
  border-left: 100px solid transparent;
  position: relative;
  transform: rotate(-90deg) scale(0.7);
}

.hexagon:before {
  position: absolute;
  content: "";
  height: 0;
  width: 150px;
  border-bottom: 150px solid #8fac86;
  border-right: 100px solid transparent;
  border-left: 100px solid transparent;
  bottom: 150px;
  left: -100px;
} */

.row-1{
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.hex {
  color: #8fac86;
  font-size: 259.8076px;
  text-shadow: 10px 15px 25px #444444;
  /* position: relative; */

}

.hex-wrapper{
  /* position: absolute; */
}
.hex-header{
  font-size: 0.6rem;
  text-transform: uppercase;
}
</style>
