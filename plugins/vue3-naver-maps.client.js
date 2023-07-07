import { createNaverMap } from "vue3-naver-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createNaverMap, {
    clientId: useRuntimeConfig().public.CLIENT_ID, // Required
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  });
});