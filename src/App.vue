<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Blog App</q-toolbar-title>
        <q-btn
          v-if="!isLoggedIn"
          flat
          label="Login"
          @click="showLoginDialog = true"
        />
        <q-btn v-else flat label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>

  <q-dialog v-model="showLoginDialog">
    <login-form @login-success="onLoginSuccess" />
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useQuasar } from "quasar";
import LoginForm from "./components/LoginForm.vue";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();

const isLoggedIn = ref(false);
const showLoginDialog = ref(false);

provide("isLoggedIn", isLoggedIn);

const onLoginSuccess = () => {
  isLoggedIn.value = true;
  showLoginDialog.value = false;
  router.push("/posts");
  $q.notify({
    color: "positive",
    message: "Login successful",
    icon: "check",
  });
};

const logout = () => {
  isLoggedIn.value = false;
  localStorage.removeItem("token");
  router.push("/");
  $q.notify({
    color: "info",
    message: "Logged out successfully",
    icon: "logout",
  });
};
</script>
