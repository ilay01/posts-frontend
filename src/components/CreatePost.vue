<template>
  <q-form @submit="createPost">
    <q-input v-model="title" label="Title" required />
    <q-input v-model="content" label="Content" type="textarea" required />
    <q-btn type="submit" color="primary" label="Create Post" />
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

const title = ref("");
const content = ref("");

const createPost = async () => {
  try {
    await axios.post(
      "http://localhost:8000/posts",
      {
        title: title.value,
        content: content.value,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    title.value = "";
    content.value = "";
    $q.notify({
      color: "positive",
      message: "Post created successfully",
      icon: "check",
    });
  } catch (error) {
    console.error("Error creating post:", error);
    $q.notify({
      color: "negative",
      message: "Failed to create post",
      icon: "error",
    });
  }
};
</script>
