<template>
 <div class="cont">
  <div class="code-editor-cont">
   <v-ace-editor
    v-model:value="contentHTML"
    @init="editorInit"
    lang="html"
    theme="chrome"
    style="height: 100%; width: 45%"
    :options="{
     wrap: true,
    }"
   />
   <v-ace-editor
    v-model:value="contentCSS"
    @init="editorInit"
    lang="css"
    theme="chrome"
    style="height: 100%; width: 45%"
    :options="{
     wrap: true,
    }"
   />
  </div>
  <iframe id="iframe"></iframe>
 </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VAceEditor } from "vue3-ace-editor";

const contentHTML = ref();
const contentCSS = ref();

onMounted(() => {
 // cntrl s for run if you dont want to do aouto fill
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
 justify-content: space-evenly;
}
.code-editor-cont {
 display: flex;
 width: 100%;
 height: 50%;
 justify-content: space-evenly;
}
</style>
