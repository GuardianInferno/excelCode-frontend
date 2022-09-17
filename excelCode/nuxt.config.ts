import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
      '@pinia/nuxt',
    ],
    app:{
        head: {
          title: "ibis",
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
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap",
            },
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
