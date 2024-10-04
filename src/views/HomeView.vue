<template>
  <div class="home">
    <h1>Home View</h1>
    <div class="tabs">
      <router-link to="/clown" class="tab">Clown Tab</router-link>
      <router-link to="/joker" class="tab">Joker Tab</router-link>
    </div>
    <router-view></router-view>
  </div>
  <div class="q-pa-md">
    <h1>Welcome to the Blog App</h1>
    <p v-if="!isLoggedIn">Please login to view and create posts.</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

const isLoggedIn = inject("isLoggedIn");
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.tab {
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.tab.router-link-active {
  background-color: #eee;
}
</style>
