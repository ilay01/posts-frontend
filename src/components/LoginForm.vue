<!-- components/LoginForm.vue -->
<template>
  <q-card style="width: 300px">
    <q-card-section>
      <div class="text-h6">Login</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="email" label="Email" type="email" />
      <q-input v-model="password" label="Password" type="password" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn flat label="Login" color="primary" @click="login" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const email = ref("");
const password = ref("");
const emit = defineEmits(["login-success"]);

const login = async () => {
  try {
    const formData = new FormData();
    formData.append("username", email.value);
    formData.append("password", password.value);

    const response = await axios.post("http://localhost:8000/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    localStorage.setItem("token", response.data.access_token);
    emit("login-success");

    $q.notify({
      color: "positive",
      message: "Login successful",
      icon: "check",
    });
  } catch (error) {
    console.error("Login failed:", error);
    $q.notify({
      color: "negative",
      message:
        "Login failed: " + (error.response?.data?.detail || "Unknown error"),
      icon: "error",
    });
  }
};
</script>
