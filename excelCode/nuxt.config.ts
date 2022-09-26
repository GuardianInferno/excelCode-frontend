import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false ,
    modules: [
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
          script: [
            {        src: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.10.1/ace.js",      },    ],
          components: true,
          gsap: {
            extraPlugins: {
              scrollTo: true,
              scrollTrigger: true,
            },
          },
          modules: [
            // https://go.nuxtjs.dev/axios
            '@nuxtjs/axios',

          ],
        
          // Axios module configuration: https://go.nuxtjs.dev/config-axios
      axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
     baseURL: 'http://127.0.0.1:8000',
    credentials: true,
          },

          
          // // please note that this is an area that is likely to change
          // style: [

          // ]
        },
        
      
      
       }
})
