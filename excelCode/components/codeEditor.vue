<template>
 <iframe id="iframe" srcdoc="codepen clone"></iframe>
 <div id="code">
  <section id="html">
   <textarea v-model="contentHTML" placeholder="html"></textarea>
  </section>
  <section id="css">
   <textarea v-model="contentCSS" placeholder="CSS"></textarea>
  </section>
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
#code {
 width: 25%;
 float: right;
}
iframe {
 width: 75%;
 float: left;
 height: 100%;
 border: 0;
 font-family: "PT Sans Narrow", sans-serif;
}
#iframes {
 height: 100%;
 width: 75%;
 float: left;
}
* {
 margin: 0;
 padding: 0;
}
html,
body {
 width: 100%;
 height: 100%;
 position: relative;
}
#code {
 float: left;
 width: 25%;
}
section {
 float: right;
 height: 33.333333%;
 position: absolute;
 width: 24.7%;
}
textarea {
 height: 97.6%;
 width: 100%;
}
#js {
 bottom: 0;
}
#css {
 top: 33.3%;
}
#html {
 top: 0;
}
</style>
