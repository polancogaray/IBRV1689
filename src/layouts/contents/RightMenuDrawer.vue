<template>
  <q-scroll-area style="height: 100vh; width: 100%;">
    <loguinSesion/>
    <userProfile/>
  </q-scroll-area>
</template>

<script setup>
import userProfile from "../../pages/user/userProfile.vue";
import loguinSesion from "../../pages/sesion/loguinSesion.vue";
</script>