<template>
  <div class="home">
    bb
    <img alt="Vue logo" src="~@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <about-view></about-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "@bb/views/AboutView";

export default {
  name: "HomeView",
  components: {
    AboutView,
    HelloWorld,
  },
};
</script>
