<template>
  <div>
    <section class="top-container"></section>
    <section class="mission-container">
      <div>
        <p class="mission-title">Our Mission</p>
      </div>
      <div>
        <p class="mission-text">
          &emsp; &ensp; The field of computer science can best be characterized
          as a rapidly expanding world with countless opportunities available to
          those who are able to explore it. In light of this, schools have begun
          trying to teach computer science earlier and earlier, with many middle
          schools now offering CS and technology classes. There seems to be a
          prevailing idea in education that the best way to present programming
          and computer science is through games or mini-puzzles, for fear that
          without such tactics, tweens and teens (ages 10-14), will not be
          interested in the concepts and simply not want to participate. <br />
          &emsp; &ensp; We seek to challenge this concept on the grounds that if
          presented correctly, a computer science curriculum can be engaging and
          fun, but without the drawback of watered-down concepts that plague
          current efforts. Using our approach of skill-driven project-based
          learning to reinforce concepts repeatedly and relate them to concepts
          already learned by students either in earlier lessons or even in other
          classes, we believe that students will be excited to learn and create.
          <br />
          &emsp; &ensp; Programming gives students the ability to dream through
          their fingertips, and we wish to help guide them along the way.
        </p>
      </div>
    </section>
    <section class="team-container">
      <div>
        <p class="team-title">Our Team</p>
      </div>
      <div class="card-container">
        <div class="employee-card">
          <img
            class="employee-img"
            src="../assets/media/m_frid_photo.jpeg"
            alt="Michael Frid"
          />
          <p class="employee-name">Michael Frid</p>
          <p class="employee-title">Founder</p>
        </div>
        <div class="employee-card">
          <img
            class="employee-img"
            src="../assets/media/m_frid_photo.jpeg"
            alt="Michael Frid"
          />
          <p class="employee-name">Hashir Abbasi</p>
          <p class="employee-title">Platform Architect</p>
        </div>
        <div class="employee-card">
          <img
            class="employee-img"
            src="../assets/media/m_frid_photo.jpeg"
            alt="Michael Frid"
          />
          <p class="employee-name">Johnson Wang</p>
          <p class="employee-title">Senior Fullstack Developer</p>
        </div>
        <div class="employee-card">
          <img
            class="employee-img"
            src="../assets/media/m_frid_photo.jpeg"
            alt="Michael Frid"
          />
          <p class="employee-name">Harvey Jiang</p>
          <p class="employee-title">Senior Fullstack Developer</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.top-container {
  height: 40vh;
  width: 100vw;
}

.mission-container {
  height: 40vh;
  width: 100vw;
  background-color: #112131;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
}

.mission-title {
  height: 5vh;
  font-size: 2.25rem;
  text-align: center;
}

.mission-text {
  display: flex;
  width: 100vw;
  height: 30vh;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  padding-left: 7.5vw;
  padding-right: 7.5vw;
  font-size: 1.1rem;
  font-weight: lighter;
}

.team-container {
  height: 55vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.team-title {
  height: 5vh;
  font-size: 2.25rem;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: row;
}

.employee-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45vh;
  width: 20vw;
  background-color: #112131;
  color: #eeeeee;
  margin-left: 4vw;
  border-radius: 1.5rem;
}

.employee-img {
  height: 35vh;
  margin-top: 20px;
  border-radius: 1.5rem;
}

.employee-name {
  width: 16.5vw;
  font-size: 1.25rem;
  font-weight: 500;
}

.employee-title {
  width: 16.5vw;
  font-size: 1rem;
  font-weight: 300;
}
</style>
