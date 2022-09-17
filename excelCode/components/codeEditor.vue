<template>
 <div class="cont">
  <div class="code-cont">
   <section class="inner-code-cont">
    <textarea v-model="contentHTML" placeholder="html"></textarea>
   </section>
   <section class="inner-code-cont">
    <textarea v-model="contentCSS" placeholder="CSS"></textarea>
   </section>
  </div>
  <iframe id="iframe" srcdoc="codepen clone"></iframe>
 </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const contentCSS = ref("");
const contentHTML = ref("");
onMounted(() => {
 // Replaces CTRL-S to run editor
 document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
   try {
    e.preventDefault();
    const iframe = document.getElementById("iframe");
    iframe.srcdoc = `<html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>I See You Inspecting</title>
                  <style>${contentCSS.value}</style>
              </head>
              <body>
                  ${contentHTML.value}
        
              </body>
            </html>`;
   } catch (error) {
    alert(error);
   }
  }
 });
});

onBeforeUpdate(() => {
 const iframe = document.getElementById("iframe");
 iframe.srcdoc = `<html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>I See You Inspecting</title>
                  <style>${contentCSS.value}</style>
              </head>
              <body>
                  ${contentHTML.value}
        
              </body>
            </html>`;
});
</script>

<style scoped>
.cont {
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
}

.code-cont {
 display: flex;
 width: 100%;
 height: 50%;
}
.inner-code-cont {
 width: 50%;
 height: 100%;
}

textarea {
 height: 100%;
 width: 100%;
 word-wrap: wrap;
}
</style>
