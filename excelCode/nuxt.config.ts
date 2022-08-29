import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head: {
          title: "ExcelCode",
          htmlAttrs: {
            lang: 'en',
          },
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
          ],
          // script: [

          //   ],
          link: [
 
          ],
          components: true,
          gsap: {
            extraPlugins: {
              scrollTo: true,
              scrollTrigger: true,
            },
          },
          
          // // please note that this is an area that is likely to change
          // style: [

          // ]
        },
        
      
      
       }
})
